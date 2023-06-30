import {findEnv} from '../find'

const envFilePath = findEnv()

if (envFilePath) {
  require('dotenv').config({path: envFilePath})
} else {
  console.error('[load-dotenv] No .env file found')
}
