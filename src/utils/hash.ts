import {createHash} from 'node:crypto';

export const calculateHash = (object: unknown) => {
  const hash = createHash('sha256');
  hash.update(JSON.stringify(object));
  return hash.digest('base64url');
};
