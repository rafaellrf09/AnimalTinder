import { Document } from 'mongoose'

export class Point extends Document {
    type: String;
    coordinates: [Number];
}