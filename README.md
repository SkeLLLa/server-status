# server-status

[![NPM Version](https://img.shields.io/npm/v/@m03geek/server-status.svg)](https://www.npmjs.com/package/@m03geek/server-status)
[![Downloads Count](https://img.shields.io/npm/dm/@m03geek/server-status.svg)](https://www.npmjs.com/package/@m03geek/server-status)
[![Vunerabilities Count](https://snyk.io/test/npm/@m03geek/server-status/badge.svg)](https://www.npmjs.com/package/@m03geek/server-status)
[![Build Status](https://gitlab.com/m03geek/server-status/badges/master/pipeline.svg)](https://gitlab.com/m03geek/server-status/commits/master)
[![Coverage Status](https://gitlab.com/m03geek/server-status/badges/master/coverage.svg)](https://gitlab.com/m03geek/server-status/commits/master)
[![License](https://img.shields.io/npm/l/@m03geek/server-status.svg)](https://gitlab.com/m03geek/server-status/blob/master/LICENSE)

Returns common info about node.js server. Could be used for

## ToC

- [server-status](#server-status)
  - [ToC](#toc)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Format](#format)

## Installation

```sh
npm i @m03geek/server-status --save
```

<sub>[Back to top](#toc)</sub>

## Usage

```js
const serverstatus = require('server-status');
console.log(serverstatus());
```

<sub>[Back to top](#toc)</sub>

## Format

```js
{ 
  name: '@m03geek/server-status', // your server name from package.json
  version: '1.0.0', // your server version from package.json
  now: 2018-08-15T12:18:14.284Z,
  uptime: '0d 00:00:01',
  uptimeSec: 0.817,
  title: 'node',
  runtime: { node: 'v10.8.0' } 
}
```

<sub>[Back to top](#toc)</sub>
