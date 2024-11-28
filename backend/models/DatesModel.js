import { Schema, model } from "mongoose";


const DatesSchema = new Schema({
    uno:{
        type: String,
        required: true
    },
    dos:{
        type: String,
        required: true
    },
    tres:{
        type: String,
        required: true
    },
    cuatro:{
        type: String,
        required: true
    },
    cinco:{
        type: String,
        required: true
    },
    seis:{
        type: String,
        required: true
    },
    siete:{
        type: String,
        required: true
    },
    ocho:{
        type: String,
        required: true
    },
    nueve:{
        type: String,
        required: true
    },
    diez:{
        type: String,
        required: true
    }
});

export const DatesModel = model('dates',DatesSchema)