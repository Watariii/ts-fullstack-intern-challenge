import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardsRepository: Repository<Card>,
  ) {}

  likeCard(body: Card) {
    const card = this.cardsRepository.create(body);
    return this.cardsRepository.save(card);
  }

  findAll(): Promise<Card[]> {
    return this.cardsRepository.find();
  }

  remove(id: number) {
    this.cardsRepository.delete(id);
    return this.cardsRepository.delete(id);
  }
}
