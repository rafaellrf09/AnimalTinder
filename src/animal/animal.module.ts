import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSchema } from 'src/schemas/animalSchema';

@Module({
  imports: [MongooseModule.forFeature( [ { name: 'Animal', schema: AnimalSchema } ] ) ],
  controllers: [AnimalController],
  providers: [AnimalService]
})
export class AnimalModule {}
