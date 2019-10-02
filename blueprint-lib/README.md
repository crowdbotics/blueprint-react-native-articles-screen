# Blueprint Function Library

The Blueprint Function Library contains shared functions for Crowdbotics Blueprints.

## Creating a new Blueprint

See [the Blueprint template repo](https://github.com/crowdbotics/blueprint-template)
for instructions on creating a new Blueprint.

## Using This Library

Each file contains functions for a specific language and/or framework. `source`
these files in your `install.sh` script. See the relevant file for available
functions.

## Guidelines

These are the guidelines for adding additional functionality to this library.

1. The only available utilities are those installed with Alpine Linux.
2. Scripts must be bash. No other languages should be used. Other interpreters,
   such as python, are not available.
3. All code must be idempotent.
