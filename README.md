# eslint-config-d-centralize

> Shareable ESLint configuration used at d-centralize.

[![npm](https://img.shields.io/npm/v/eslint-config-d-centralize.svg)][npm]
[![Build Status](https://img.shields.io/travis/dcentralize/eslint-config-d-centralize/master.svg)][Build Status]
[![devDependency Status](https://img.shields.io/david/dev/dcentralize/eslint-config-d-centralize.svg)][devDependency Status]
[![peerDependency Status](https://img.shields.io/david/peer/dcentralize/eslint-config-d-centralize.svg)][peerDependency Status]

This is a very opinionated shareable ESLint configuration. The goal of this project is to enforce a strict coding style at [d-centralize][d-centralize] projects.


## Installation

```
npm install --save-dev eslint eslint-config-d-centralize
```


## Usage

To use this preset, simply extend it in the project `.eslintrc` file. See [Configuring ESLint][Configuring ESLint] for details. Any rules can still be overridden.


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

#### React preset

This preset uses [eslint-plugin-react][eslint-plugin-react]

```sh
npm install --save-dev eslint-plugin-react
```

```yaml
root: true

extends: d-centralize/react

settings:
  react:
    version: '15.0'
```


[Build Status]: https://travis-ci.org/dcentralize/eslint-config-d-centralize
[devDependency Status]: https://david-dm.org/dcentralize/eslint-config-d-centralize/?type=dev
[Configuring ESLint]: http://eslint.org/docs/user-guide/configuring
[d-centralize]: http://d-centralize.nl
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[npm]: https://www.npmjs.com/package/eslint-config-d-centralize
[peerDependency Status]: https://david-dm.org/dcentralize/eslint-config-d-centralize/?type=peer
