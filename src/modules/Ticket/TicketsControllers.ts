import { Request, Response } from 'express';
import { responseSuccess, responseError } from '../../api/shared/network/response';
import { getNumbersTicketsSold, getTicketsSold, markTicket } from './TicketServices';

export async function ticketsPostController(req: Request, res: Response) {
  const { competitorName, competitorPhone, number, raffleId } = req.body;
  const userId = req.user;
  try {
    const ticket = await markTicket({ competitorName, competitorPhone, number, raffleId }, userId);
    responseSuccess(res, 201, ticket);
  } catch (error: any) {
    responseError(res, 400, error.message);
  }
}

export async function ticketsSoldGetController(req: Request, res: Response) {
  const raffleId = Number(req.params.raffleId);
  const userId = req.user;
  try {
    const tickets = await getTicketsSold(raffleId, userId);
    responseSuccess(res, 200, tickets);
  } catch (error: any) {
    responseError(res, 400, error.message);
  }
}

export async function numbersTicketsSoldGetController(req: Request, res: Response) {
  const raffleId = Number(req.params.raffleId);

  try {
    const numbersTickets = await getNumbersTicketsSold(raffleId);
    responseSuccess(res, 200, numbersTickets);
  } catch (error: any) {
    responseError(res, 400, error.message);
  }
}
