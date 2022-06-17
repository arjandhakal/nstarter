/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();
import config from 'config';

export const PORT = config.get<number>('port');
export const JWT_PRIVATE_KEY = config.get<string>('jwtPrivateKey');
export const JWT_PUBLIC_KEY = config.get<string>('jwtPublicKey');
export const SALT_ROUNDS = config.get<number>('saltWorkFactor');
export const APP_ENV = config.get<string>('appEnv');
export const SENTRY_DSN = config.get<string>('sentryDSN');
