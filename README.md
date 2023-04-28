# Load Dot ENV

Find the closest `.env` file in any parent directory.

## Install

```bash
npm i dotenv load-dotenv     # With npm
pnpm i dotenv load-dotenv    # With pnpm
yarn add dotenv load-dotenv  # With yarn
```

## Find and load the closest .env file

```js
import 'load-dotenv/load';
```

## Or load it yourself

Add this import before any other import in your project:

```js
import { findEnv } from 'load-dotenv';

const envFile = findEnv();
require('dotenv').config({ path: envFile });
```
