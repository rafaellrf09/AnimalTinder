import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal } from './animal.interface';
import { CreateAnimalDto } from './dto/animal.dto';

@Injectable()
export class AnimalService {

    constructor(@InjectModel('Animal') private animalModel: Model<Animal>) { }

    async findAll(): Promise<Animal[]> {
        return this.animalModel.find().exec();
    }

    async createAnimal(createAnimalDto: CreateAnimalDto): Promise<Animal> {
        const { latitude, longitude, name, animal_type , breed, age , image_url } = createAnimalDto;
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        const newAnimal = new this.animalModel({
            name,
            animal_type,
            breed,
            age,
            image_url,
            location
        })
        return newAnimal;

    }

}
