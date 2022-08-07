import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { configEnv } from '../../../config';
import { TokenPayload } from '../../../modules/User/tokenServices';
import { responseError } from '../../shared/network/response';

export function verifyAuthToken(req: Request, res: Response, next: NextFunction) {
  try {
    const authorization = req.get('authorization');

    const token = authorization && authorization.toLowerCase().startsWith('bearer') ? authorization.substring(7) : null;

    const decodedToken = token ? (jwt.verify(token, configEnv.secretKey || 'dev') as TokenPayload) : null;

    if (!decodedToken || !decodedToken.id) {
      return responseError(res, 401, 'token missing or invalid');
    }

    req.user = decodedToken.id;
    next();
  } catch (err: any) {
    responseError(res, 401, 'token missing or invalid');
  }
}
