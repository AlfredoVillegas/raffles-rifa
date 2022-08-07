import * as jwt from 'jsonwebtoken';
import { configEnv } from '../../config';
import { userResponse } from './UserTypes';

export interface TokenPayload {
  id: number;
}

export function createToken(user: userResponse): string {
  const payload: TokenPayload = {
    id: user.id
  };

  const tokenJwt = jwt.sign(payload, configEnv.secretKey || 'dev', { expiresIn: '24h' });

  return tokenJwt;
}
