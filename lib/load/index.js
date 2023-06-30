import {findEnv} from '../find'

const envFilePath = findEnv()

if (envFilePath) {
  require('dotenv').config({path: envFilePath})
} else {
  throw new Error('[load-dotenv] No .env file found')
}
