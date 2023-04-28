import { findUpSync } from 'find-up';

export default function findEnv() {
  return findUpSync(process.env.ENV_FILE || '.env');
}
