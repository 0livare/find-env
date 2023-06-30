# Load Dot ENV

Automatically find the closest `.env` file in any parent directory of the [cwd], and then load those environment variables into [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env).

## Why?

By default the `dotenv` package only looks in the [current working directory][cwd] of the Node.js process for a `.env` file. And if you use the [path] option, that path must be identical both when running locally and when running in production.

Monorepos are a common example when it may be convenient to have a `.env` file that is not in your cwd. `load-dotenv` allows you to have a single `.env` file used by every package, regardless of file structure.

`load-dotenv` provides a simple interface to load your environment variables, only requiring you to add a single `import` statement. That avoids the hassle of wanting to load your environment vars before any other code runs, but also having to place all the `import`s at the top of your file before any other code.

[cwd]: https://nodejs.org/api/process.html#processcwd
[path]: https://github.com/motdotla/dotenv#path

## Install

Make sure you also install `dotenv`, which is a peer dependency of this package.

```bash
npm i dotenv load-dotenv     # With npm
pnpm i dotenv load-dotenv    # With pnpm
yarn add dotenv load-dotenv  # With yarn
```

## Find and load the closest .env file

As early as possible in your application, import `load-dotenv/load`:

```js
import 'load-dotenv/load'
```

Or in Common JS:

```js
require('load-dotenv/load')
```

> This will by default throw an error if it can't find a `.env` file in any parent directory. To not throw an error, import `load-dotenv/load/optional` instead.

## Or load it yourself

```js
import {findEnv} from 'load-dotenv'
import * as dotenv from 'dotenv'

const envFilePath = findEnv()
dotenv.config({path: envFilePath})
```

Or in Common JS:

```js
const {findEnv} = require('load-dotenv')
const dotEnv = require('dotenv')

const envFilePath = findEnv()
dotEnv.config({path: envFilePath})
```

Or with a custom name:

```js
const envFilePath = findEnv('.env.local')
dotenv.config({path: envFilePath})
```
