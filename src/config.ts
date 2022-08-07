import { config } from 'dotenv';
config();

export const configEnv = {
  secretKey: process.env.SECRET_KEY || 'dev'
};
