import {findUpSync} from 'find-up'

export function findEnv(fileName = '') {
  return findUpSync(fileName || process.env.ENV_FILE || '.env')
}
