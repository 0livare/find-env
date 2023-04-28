# Load Dot ENV

Automatically load the closest `.env` file in any parent directory.

## Install

```bash
npm i dotenv load-dotenv     # With npm
pnpm i dotenv load-dotenv    # With pnpm
yarn add dotenv load-dotenv  # With yarn
```

## Find and load the closest .env file

Add this import before any other import in your project:

```js
import 'load-dotenv/load'
```

## Or load it yourself

```js
import {findEnv} from 'load-dotenv'

const envFile = findEnv()
require('dotenv').config({path: envFile})
```

Or with a custom name

```js
const envFile = findEnv('.env.local')
require('dotenv').config({path: envFile})
```
