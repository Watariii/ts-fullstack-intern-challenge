import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card/card.entity';
import { CardsModule } from './card/cards.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '22',
      database: 'support_lk_db',
      entities: [Card],
      synchronize: true,
    }),
    CardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
