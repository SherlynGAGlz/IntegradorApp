import {Schema, model } from "mongoose";
const UserSchema = new Schema ({
    name: {
        type : String,
        require : True
    },
    password: {
        type : String,
        require : True
    },
    email: {
        type : String,
        require : True
    }
});
//conexion en mongo es users
export const UserModel = model ("users", UserSchema);