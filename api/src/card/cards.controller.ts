import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from './card.entity';

@Controller('likes')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  findAll(): Promise<Card[]> {
    return this.cardsService.findAll();
  }

  @Post()
  likeCard(@Body() body: Card) {
    return this.cardsService.likeCard(body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cardsService.remove(id);
  }
}
