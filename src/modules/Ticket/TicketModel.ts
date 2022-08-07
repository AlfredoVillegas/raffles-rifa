import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'competitor_name' })
  competitorName: string;

  @Column({ name: 'competitor_phone' })
  competitorPhone: string;

  @Column()
  number: number;

  @Column({ name: 'raffle_id' })
  raffleId: number;

  constructor(competitorName: string, competitorPhone: string, number: number, raffleId: number) {
    this.competitorName = competitorName;
    this.competitorPhone = competitorPhone;
    this.number = number;
    this.raffleId = raffleId;
  }
}
