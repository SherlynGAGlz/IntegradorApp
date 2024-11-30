import { Schema, model } from "mongoose";
//colecciones para que se vean reflejadas en mongo
//esquema para almacenar respuestas en MongoDB
const AnswerSchema = new Schema({
    uno: {
        type: String,
        required: true  
    }, 
    dos: {
        type: String,
        required: true
    }, 
    tres: {
        type: String,
        required: true
    }, 
    cuatro: {
        type: String,
        required: true
    }, 
    cinco: {
        type: String,
        required: true
    }, 
    seis: {
        type: String,
        required: true
    }, 
    ocho: {
        type: String,
        required: true
    }, 
    nueve: {
        type: String,
        required: true
    }, 
    diez: {
        type: String,
        required: true
    } 
});

export const AnswerModel = model("answers", AnswerSchema);  
