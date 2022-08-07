import { AppDataSource } from '../../database/TypeOrmClient';
import { verifyUserIsCreatorOrFail } from '../Raffle/RaffleServices';
import { Ticket } from './TicketModel';
import { newTicket, PublicNumberTicket } from './ticketTypes';

const repository = AppDataSource.getRepository(Ticket);

async function ticketNumberIsAvailable(numberTicket: number, raffleId: number): Promise<boolean> {
  const ticket = await repository.findOneBy({ raffleId, number: numberTicket });
  return ticket === null;
}

export async function markTicket(newTicket: newTicket, userId: number): Promise<Ticket> {
  await verifyUserIsCreatorOrFail(userId, newTicket.raffleId);

  const numberIsAvailable = await ticketNumberIsAvailable(newTicket.number, newTicket.raffleId);
  if (!numberIsAvailable) {
    throw new Error('Ticket number not available');
  }

  const ticket = new Ticket(newTicket.competitorName, newTicket.competitorPhone, newTicket.number, newTicket.raffleId);
  const ticketFromDb = await repository.save(ticket);

  return ticketFromDb;
}

export async function getTicketsSold(raffleId: number, userId: number): Promise<Ticket[]> {
  await verifyUserIsCreatorOrFail(userId, raffleId);

  const ticketsSold = await repository.findBy({ raffleId });
  return ticketsSold;
}

export async function getNumbersTicketsSold(raffleId: number): Promise<PublicNumberTicket[]> {
  const ticketsSold = await repository.findBy({ raffleId });

  const publicTicketsResponse = ticketsSold.map(ticket => ticket.number);
  return publicTicketsResponse;
}
