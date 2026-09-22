import {randomBytes} from 'node:crypto';

export const srid = (): string => randomBytes(256).toString('hex');
