import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Role } from '../enum/Role.enum';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  nickname: string;

  @Column({default: Role.USER})
  role: number;

  @Column("simple-array", {default: ""})
  refreshToken?: string[]

}