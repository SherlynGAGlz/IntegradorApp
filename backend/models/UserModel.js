import {Schema, model } from "mongoose";
const UserSchema = new Schema ({
    name: {
        type : String,
        require : true
    },
    password: {
        type : String,
        require : true
    },
    email: {
        type : String,
        require : true
    }
});
//conexion en mongo es users
export const UserModel = model ("users", UserSchema);