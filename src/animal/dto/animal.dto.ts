import { IsNotEmpty, IsNumber } from "class-validator";
import { Point } from "src/point/point.interface";

export class CreateAnimalDto {
    @IsNotEmpty()
    name: string;

    @IsNumber()
    age: number;

    @IsNotEmpty()
    breed: string;

    genre: string;

    animal_type : String

    image_url: string;

    latitude: String;

    longitude: String;
}