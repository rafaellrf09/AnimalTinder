import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalModule } from './animal/animal.module';
import { PointModule } from './point/point.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/animalNest', { useUnifiedTopology: true, useNewUrlParser: true }),
    AnimalModule,
    PointModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
