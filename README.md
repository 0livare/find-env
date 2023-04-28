# Find ENV

Find the closest `.env` file in any parent directory into `process.env`.

## Install

```bash
npm i dotenv find-env    # With npm
pnpm i dotenv find-env   # With pnpm
yarn add dotenv find-env # With yarn
```

## Find and load the closest .env file

```js
import 'find-env/load';
```

## Or load it yourself

Add this import before any other import in your project:

```js
import findEnv from 'find-env';

const envFile = findEnv();
require('dotenv').config({ path: envFile });
```
