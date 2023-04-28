import { findUpSync } from 'find-up';

export function findEnv() {
  return findUpSync(process.env.ENV_FILE || '.env');
}
