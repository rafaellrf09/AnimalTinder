const mongoose = require('mongoose')
const PointSchema = require('./pointSchema')

export const AnimalSchema = new mongoose.Schema({
    name: String,
    animal_type : String,
    breed: String,
    age: Number,
    image_url: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});