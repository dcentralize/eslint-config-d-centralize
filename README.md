# eslint-config-d-centralize

> Shareable ESLint configuration used at d-centralize.

[![npm](https://img.shields.io/npm/v/eslint-config-d-centralize.svg)](https://www.npmjs.com/package/eslint-config-d-centralize)
[![Build Status](https://img.shields.io/travis/dcentralize/eslint-config-d-centralize/master.svg)](https://travis-ci.org/dcentralize/eslint-config-d-centralize)
[![devDependency Status](https://img.shields.io/david/dev/dcentralize/eslint-config-d-centralize.svg)](https://david-dm.org/dcentralize/eslint-config-d-centralize/?type=dev)
[![peerDependency Status](https://img.shields.io/david/peer/dcentralize/eslint-config-d-centralize.svg)](https://david-dm.org/dcentralize/eslint-config-d-centralize/?type=peer)

This is a very opinionated shareable ESLint configuration. The goal of this project is to enforce a strict coding style at [d-centralize](http://d-centralize.nl) projects.


## Installation

```
npm install --save-dev eslint eslint-config-d-centralize
```


## Usage

To use this preset, simply extend it in the project `.eslintrc` file. See [Configuring ESLint](http://eslint.org/docs/user-guide/configuring) for details. Any rules can still be overridden.


#### ES6 preset

```yaml
root: true

extends: d-centralize/es6
```

#### ES5 preset

```yaml
root: true

extends: d-centralize
```
