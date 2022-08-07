import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { userResponse } from './UserTypes';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column({
    unique: true,
    nullable: false
  })
  email: string;

  @Column({
    unique: true
  })
  phone: string;

  @Column({})
  password: string;

  constructor(name: string, phone: string, email: string, password: string) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }

  toResponseSecure(): userResponse {
    return {
      id: this.id,
      name: this.name,
      phone: this.phone,
      email: this.email
    };
  }
}
