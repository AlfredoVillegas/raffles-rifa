import { Request, Response } from 'express';
import { responseError, responseSuccess } from '../../api/shared/network/response';
import { createRaffle, getRaffle, getRafflesByUser } from './RaffleServices';

export async function rafflePostController(req: Request, res: Response) {
  const { name, description, drawDate, totalTickets } = req.body;
  const userId = req.user;

  try {
    const raffle = await createRaffle({ name, description, drawDate, totalTickets, userId });
    responseSuccess(res, 201, raffle);
  } catch (error: any) {
    responseError(res, 400, error.message);
  }
}

export async function raffleGetController(req: Request, res: Response) {
  const raffleId = Number(req.params.id);

  try {
    const raffle = await getRaffle(raffleId);
    responseSuccess(res, 200, raffle);
  } catch (error: any) {
    responseError(res, 404, error.message);
  }
}

export async function rafflesByUserGetController(req: Request, res: Response) {
  const userId = req.user;

  try {
    const raffles = await getRafflesByUser(userId);
    responseSuccess(res, 200, raffles);
  } catch (error: any) {
    responseError(res, 404, error.message);
  }
}
