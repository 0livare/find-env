/**
 * @param fileName (_optional_) The name of the `.env` file to find. Defaults to `.env`.
 * @returns the absolute file path of the closest `.env` file.
 */
export function findEnv(fileName?: string): string | undefined
