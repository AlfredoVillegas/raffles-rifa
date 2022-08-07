export interface newTicket {
  competitorName: string;
  competitorPhone: string;
  number: number;
  raffleId: number;
}

export type PublicTicket = Pick<newTicket, 'number'>;

export type PublicNumberTicket = number;
