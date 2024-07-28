import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Card {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;
}
