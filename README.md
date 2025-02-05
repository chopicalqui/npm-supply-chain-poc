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

1. Clone the repository.
2. Replace `YOUR_BURP_COLLAB_SERVER` in [msbuild.xml](src/msbuild.xml) with your Burp Collaborator URL.
3. Run test installation using `npm run test`.

## Resources

- [How to Create and Publish an NPM Package – a Step-by-Step Guide](https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/)
- [Quickstart for GitHub Packages](https://docs.github.com/en/packages/quickstart)
