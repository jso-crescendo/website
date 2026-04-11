import {createHash} from 'crypto';

export const calculateHash = (object: any) => {
  const hash = createHash('sha256');
  hash.update(JSON.stringify(object));
  return hash.digest('base64url');
};
