# NPM Supply Chain PoC

This repository demonstrates a proof-of-concept (PoC) for an NPM supply chain attack using `msbuild`.

## Overview

When this package is installed via `npm install`, it executes a `msbuild` to compile and run a C#
[payload](src/msbuild.xml). The C# payload then sends an HTTP request to predefined web server. This demonstrates how
an adversary could execute arbitrary Windows binaries through an NPM package installation.

## Files

- [index.js](index.js): The NPM package's entry point.
- [msbuild.xml](src/msbuild.xml): The C# source code that sends a request to Burp Collaborator.
- [package.json](package.json): Defines the package and executes [test.js](src/test.js).
- [test.js](src/test.js): Wrapper to execute `msbuild`.

## Usage

### Local Testing

1. Clone the repository.
2. Replace `YOUR_BURP_COLLAB_SERVER` in [msbuild.xml](src/msbuild.xml) with our Burp Collaborator URL.
3. Run test installation using `npm run test`.

### Testing Via NPM Registry

Publishing the NPM package online requires the following steps:

1. Fork this package. **For security reasons, ensure that the fork is a private repository.**
2. Replace `YOUR_BURP_COLLAB_SERVER` in [msbuild.xml](src/msbuild.xml) with our Burp Collaborator URL.
3. Commit and push changes to GitHub. We might want to use a temporary branch for this, which we can delete afterwards.
4. Creating a new [Release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). This automatically publishes the NPM package to GitHub's NPM registry `npm.pkg.github.com`.

Installing the NPM package from a private GitHub repository requires the following steps:

1. Create a [personal GitHub access token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#personal-access-tokens-classic). The access token must be scoped to permission `read:packages` (see [About permissions for GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)).
2. Perform login via NPM and login with GitHub user account and access token.

   ```
   npm login --scope=@chopicalqui --registry=https://npm.pkg.github.com --auth-type=legacy
   ```

3. Install NPM package.

   ```
   npm install @chopicalqui/npm/supply-chain-poc@0.0.1
   ```

## Resources

- [How to Create and Publish an NPM Package – a Step-by-Step Guide](https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/)
- [Quickstart for GitHub Packages](https://docs.github.com/en/packages/quickstart)
