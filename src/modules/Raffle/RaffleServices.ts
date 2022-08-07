import { AppDataSource } from '../../database/TypeOrmClient';
import { Raffle } from './RaffleModel';
import { NewRaffle } from './raffleTypes';

const repository = AppDataSource.getRepository(Raffle);

export async function createRaffle(newRaffle: NewRaffle): Promise<Raffle> {
  const createdAt = new Date();

  const raffle = new Raffle(
    newRaffle.name,
    newRaffle.description,
    createdAt,
    new Date(newRaffle.drawDate),
    newRaffle.totalTickets,
    newRaffle.userId
  );

  return await repository.save(raffle);
}

export async function getRaffle(id: number): Promise<Raffle> {
  const raffle = await repository.findOneBy({ id });

  if (!raffle) throw new Error('Raffle not exists');

  return raffle;
}

export async function getRafflesByUser(userId: number): Promise<Raffle[]> {
  const raffles = await repository.findBy({ userId });

  if (!raffles[0]) throw new Error('Raffles not founds');

  return raffles;
}

export async function verifyUserIsCreatorOrFail(userId: number, raffleId: number): Promise<boolean> {
  const raffle = await getRaffle(raffleId);

  const userIsCreator = userId === raffle.userId;
  if (!userIsCreator) {
    throw new Error('user not have permision');
  }

  return true;
}
