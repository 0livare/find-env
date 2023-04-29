import {findEnv} from './find'

const envFilePath = findEnv()

if (envFilePath) {
  require('dotenv').config({path: envFilePath})
} else {
  throw new Error('No .env file found')
}
