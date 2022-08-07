import { Router } from 'express';
import { verifyAuthToken } from '../../api/shared/middelwares/VerifyAuthToken';
import { numbersTicketsSoldGetController, ticketsPostController, ticketsSoldGetController } from './TicketsControllers';

export function registerTicketsRoutes(router: Router) {
  //router.use('/tickets', verifyAuthToken);

  router.post('/tickets', verifyAuthToken, ticketsPostController);

  router.get('/tickets/:raffleId', verifyAuthToken, ticketsSoldGetController);

  router.get('/tickets/public/:raffleId', numbersTicketsSoldGetController);
}
