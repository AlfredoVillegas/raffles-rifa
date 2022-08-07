import { Router } from 'express';
import { verifyAuthToken } from '../../api/shared/middelwares/VerifyAuthToken';
import { raffleGetController, rafflePostController, rafflesByUserGetController } from './RaffleControllers';

export function registerRefflesRoutes(router: Router) {
  router.get('/raffles/:id', raffleGetController);

  router.use('/raffles', verifyAuthToken);

  router.post('/raffles', rafflePostController);

  router.get('/raffles', rafflesByUserGetController);
}
