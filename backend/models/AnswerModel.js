import { Schema, model } from "mongoose";
//colecciones para que se vean reflejadas en mongo

const AnswerSchema = new Schema({
    uno : {
        type : "String",
        require : True
    }, 
    dos : {
        type : "String",
        require : True
    }, 
    tres : {
        type : "String",
        require : True
    }, 
    cuatro : {
        type : "String",
        require : True
    }, 
    cinco : {
        type : "String",
        require : True
    }, 
    seis : {
        type : "String",
        require : True
    }, 
    ocho : {
        type : "String",
        require : True
    }, 
    nueve : {
        type : "String",
        require : True
    }, 
    diez : {
        type : "String",
        require : True
    } 
})

export const AnswerModel = model("answers", AnswerSchema)
