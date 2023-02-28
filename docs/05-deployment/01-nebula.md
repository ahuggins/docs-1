# Nebula

Nebula is a low code tool that can deploy your Lyra data on most common providers like Cloudflare Workers, AWS Lambda and Google Cloud Functions.

## Usage

You can install Lyra globally by running:

```bash title="Using npm"
npm install -g @lyrasearch/nebula
```

```bash title="Using yarn"
yarn global add @lyrasearch/nebula
```

```bash title="Using pnpm"
pnpm add -g @lyrasearch/nebula
```

After that, a `nebula` executable should be available. You can inspect its options by running:

```bash
nebula --help
```

### Bundle Lyra and your data

Prepare a file called `lyra.yml` containing the basic information for your deployment.

The simplest file you can create is something like this:

```yaml
version: 0.1

schema:
  title: string
  description: string

input:
  path: ./get-data.js
  type: "javascript" # Can also use "json" here

output:
  name: lyra.js
  directory: tmp
```

As you might imagine, the `schema` section contains the same schema you would usually pass to Lyra's `create` method.

The `input.path` must point to a local JSON file or a Javascript exporting (both ESM and CJS are supported) a function. In both cases the resulting data will be the data Nebula will index.

The `output` section contains the directory and the name of the bundled file produced by Nebula.

When you're ready, simply run:

```
nebula bundle lyra.yml
```

### Deploy

In the `lyra.yml` add a new section called `deploy` containing all the required information (see sections below).

When you're ready, simply run:

```
nebula deploy lyra.yml
```

The CLI will print the URL for the newly deployed function.

The function requires no authentication and can be invoked by using a `GET` or `POST` request:

- `GET` requests will accept the parameters on the querystring.
- `POST` request will accept the parameters int JSON request body.

In both cases, the function accepts the following parameters:

- `term`: The term to search. It is the only mandatory parameters.
- `limit`, `offset`, `tolerance`, `exact`, `properties`: Parameters forwarded to Lyra's `search` method.

### Deploy on Cloudflare Workers

In the `lyra.yml` create a `deploy` section structured as follows:

```yaml
deploy:
  platform: cloudflare
  configuration:
    workerName: "<worker>" # Name of the worker to deploy to
    useWorkerDomain: true # Optional, if to use custom domains for the worker
    r2: "[bucket]" # Optional, name of R2 bucket where to store the data
    kv: "[namespace]" # Optional, name of KV namespace where to store the data
```

The following environments are required:

- `CLOUDFLARE_ACCOUNT`: The Cloudflare account id.
- `CLOUDFLARE_API_TOKEN`: The Cloudflare API Token.
- `CLOUDFLARE_R2_ACCESS_KEY_ID`: The Cloudflare R2 key id (only if R2 is used).
- `CLOUDFLARE_R2_ACCESS_KEY_SECRET`: The Cloudflare R2 key secret (only if R2 is used).

### Deploy on AWS Lambda

In the `lyra.yml` create a `deploy` section structured as follows:

```yaml
deploy:
  platform: aws-lambda
  configuration:
    function: "<function>" # Name of the Lambda to deploy to
    repository: "<ecrRepository>" # Name of the ECR repository where to store the Lambda image
    s3: "[bucket]" # Optional, name of S3 bucket where to store the data
```

The following environments are required:

- `AWS_ACCOUNT_ID`: The AWS account id.
- `AWS_ACCESS_KEY_ID`: The AWS key id.
- `AWS_SECRET_ACCESS_KEY`: The AWS access key.
- `AWS_REGION`: The AWS region.

### Deploy on Google Cloud Functions

In the `lyra.yml` create a `deploy` section structured as follows:

```yaml
deploy:
  platform: google-cloud
  configuration:
    function: "<function>" # Name of the Google Cloud Function to deploy to
    bucket: "<bucket>" # Name of the Google Cloud Storage bucket to use
    project: "<project>" # Name of the Google Cloud project to use
    region: "<region>" # Name of the Google Cloud region to use
    separateDataObject: true # Optional, if to store the data a separate object in the bucket
```

The following environments are required:

- `GCP_CLIENT_ID`: The Google Cloud client id.
- `GCP_CLIENT_SECRET`: The Google Cloud client secret.
- `GCP_REFRESH_TOKEN`: The Google Cloud oAuth2 refresh token.

### Deploy on Microsoft Azure App Functions

In the `lyra.yml` create a `deploy` section structured as follows:

```yaml
deploy:
  platform: azure
  configuration:
    application: "<application>" # Name of the Azure application to use
    function: "<function>" # Name of the Azure App Function to deploy to
    resourceGroup: "<resourceGroup>" # Name of the Azure resource group to use
    storageAccount: "<storageAccount>" # Name of the Azure storage account to use
    region: "<region>" # Name of the Azure region to use
    container: "[container]" # Optional, name of the Azure storage container where to store the data
```

The Azure deployment needs the Azure CLI to be installed locally ([see instructions](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)) and properly logged in (run `az login`).

### Deploy on custom platforms

In the `lyra.yml` create a `deploy` section structured as follows:

```yaml
deploy:
  platform: custom
  configuration:
    path: ./examples/platforms/postgresql/index.js
```

The `configuration.path` must point to a Javascript file exporting the following functions:

- `bundle`: Used for bundling, it will receive the following arguments:

  - `configuration`: A Nebula configuration object
  - `serializedLyra`: The bundled Lyra as a string or buffer.

  Must return an object with the following properties:

  - `template`: The updated bundled Lyra
  - `hasSeparateData`: Optional, if the bundle should output the data as separate JSON file.
  - `afterBuild`: An optional async callback which should be invoked after the bundle has been written.

    It will receive the following arguments:

    - `spinner`: A [ora](https://npmjs.com/ora) spinner object
    - `bundlePath`: The path of the written bundle.

- `deploy`: Used for deploying, it will receive the following arguments:

  - `spinner`: A [ora](https://npmjs.com/ora) spinner object
  - `sourcePath`: The full path of the bundle file.
  - `configuration`: A Nebula configuration object
  - `rootDirectory`: The absolute root path where all produced files are stored.

- `undeploy`: Used for undeploying, it will received the following arguments:

  - `spinner`: A [ora](https://npmjs.com/ora) spinner object
  - `configuration`: A Nebula configuration object

All functions can return a promis.
