import { Document } from 'mongoose'
import { Point } from 'src/point/point.interface'

export class Animal extends Document {
    name: string;
    animal_type: String;
    age: number;
    breed: string;
    image_url: string;
    location: Point;
}