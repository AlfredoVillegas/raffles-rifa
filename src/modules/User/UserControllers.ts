import { Request, Response } from 'express';
import { responseError, responseSuccess } from '../../api/shared/network/response';
import { createToken } from './tokenServices';
import { getUser, loginUser, registerUser } from './UserServices';

export async function registerUserController(req: Request, res: Response): Promise<void> {
  const { name, email, phone, password } = req.body;

  try {
    const newUser = await registerUser({ name, email, phone, password });
    const accessToken = createToken(newUser);

    responseSuccess(res, 201, { user: newUser, accessToken });
  } catch (error: any) {
    responseError(res, 400, error.message);
  }
}

export async function loginUserController(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  try {
    const user = await loginUser({ email, password });
    const accessToken = createToken(user);

    responseSuccess(res, 200, { user, accessToken });
  } catch (error: any) {
    responseError(res, 403, error.message);
  }
}

export async function userGetController(req: Request, res: Response): Promise<void> {
  const userId = req.user;

  try {
    const user = await getUser(userId);
    responseSuccess(res, 200, user);
  } catch (error: any) {
    responseError(res, 400, error.message);
  }
}
