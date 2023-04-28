import {findEnv} from './find'

const envFile = findEnv()

if (envFile) {
  require('dotenv').config({path: envFile})
} else {
  throw new Error('No .env file found')
}
