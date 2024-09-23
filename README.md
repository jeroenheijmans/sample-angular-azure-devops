# Sample Angular + Azure Devops application

This sample will showcase how to set up an extended Azure Devops pipeline for an Angular application.

## ⚠️ Notice about updates

Note that this repository is provided "as-is" and will most likely not receive any (security) updates.

## Pipeline features

The pipeline will exercise the following features:

- Node installation/updating
- NPM package installation with Azure Devops caching
- Angular linting
- Angular unit and integration testing
- Angular builds with sourcemap generation
- Cypress end to end testing (TODO)
- Artifact publishing
- Manual approval step
- Deployment to cloud service (TODO)

Using both Stages and Jobs from Azure Devops.

## Application features

The Angular application does not do anything _meaningful_.
It does still do a bunch of stuff, both at build and at run-time.
That's only there to make the pipeline more interesting.
