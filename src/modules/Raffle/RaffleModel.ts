import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Raffle {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'draw_date' })
  drawDate: Date;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'total_tickets' })
  totalTickets: number;

  constructor(
    name: string,
    description: string,
    createdAt: Date,
    drawDate: Date,
    totalTickets: number,
    userId: number
  ) {
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.drawDate = drawDate;
    this.totalTickets = totalTickets;
    this.userId = userId;
  }
}
