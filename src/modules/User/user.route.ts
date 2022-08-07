import { Router } from 'express';
import { verifyAuthToken } from '../../api/shared/middelwares/VerifyAuthToken';
import { loginUserController, registerUserController, userGetController } from './UserControllers';

export function registerUserRoutes(router: Router) {
  router.post('/users', registerUserController);

  router.post('/users/login', loginUserController);

  router.get('/users/me', verifyAuthToken, userGetController);
}
