import {randomBytes} from 'crypto';

export const srid = (): string => randomBytes(256).toString('hex');
