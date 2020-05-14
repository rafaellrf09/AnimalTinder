import { Controller, Get, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './animal.interface';
import { CreateAnimalDto } from './dto/animal.dto'
@Controller('animal')
export class AnimalController {

    constructor(private AnimalService: AnimalService) { }

    @Get()
    animals(): Promise<Animal[]> {
        return this.AnimalService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createDog(@Body() createAnimalDto: CreateAnimalDto): Promise<Animal> {
        return this.AnimalService.createAnimal(createAnimalDto);
    }

}
