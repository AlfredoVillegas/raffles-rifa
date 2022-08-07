export interface Raffle {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  drawDate: Date;
  totalTickets: number;
  userId: number;
}
export type NewRaffle = Omit<Raffle, 'id' | 'createdAt'>;
