//CRUD son funciones
//Traer un solo usuario, loggear usuario

import { UserModel } from "../models/UserModel.js";
import jwt from "jsonwebtoken";

//! pregunta si es falso, nulo, indefinido, devuelve un true 
export default {
    //asincrono que se puede tardar en ejecutar
    createUser: async (req, res) => {
        try {
            const name = req.body.name;
            const password = req.body.password;
            const email = req.body.email;
            if ( !name || !password || !email){
                res.status(400).json({
                    "msg" : "Parametros invalidos"
                })
            }
            //
            const user = {
                name,
                password,
                email
            };
            //espere 
            await UserModel.create(user);
            res.status(200).json ({
                "msg" : "Usuario creado con exito"
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                "msg" :"Ocurrio error al crear usuario"
            });
            return;
        }
    },
    deleteUser : async (req, res) => {
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);
            if (!user){
                res.status(400).json({
                    "msg" : "No se encontro el usuario para eliminar"
                })
                return;
            }
            await UserModel.deleteOne({
                _id : id
            });
            res.status(200).json({
                "msg" : "Usuario eliminado con exito"
            })
            return;
        } catch (error) {
            console.log(error)
            res.status(500).json({
                "msg" :"Ocurrio error al eliminar usuario"
            });
        }
    },
    updateUser : async (req, res) => {
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);
            if (!user){
                res.status(400).json({
                    "msg" : "No se encontro el usuario para actualizar"
                })
                return;
            }
            
            const name = req.body.name;
            const password = req.body.password;
            const email = req.body.email;
            if ( !name || !password || !email){
                res.status(400).json({
                    "msg" : "Parametros invalidos"
                })
                return;
            }
            await UserModel.findByIdAndUpdate(id, {
                $set : {
                    name,
                    password,
                    email
                }
            })
            res.status(200).json({
                "msg" : "Usuario actulizado con exito"
            })
            return;

            } catch (error) {
            console.log(error)
            res.status(500).json({
                "msg" :"Ocurrio error al eliminar usuario"
            });
            return;
        }
    },
    getAllUser : async (req, res) => {
        try {
            const users = await UserModel.find();
            res.status(200).json({
                "msg" : "Usuarios obtenidos con exito",
                users
            });
        } catch (error){
            console.log(error);
            res.status(500).json({
                "msg" : "Ocurrio un error al obtener los usuarios",
            });
            return;

        }
    },
    gebUser : async (req, res) => {
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);
            if(!user) {
                res.status(400).json({
                    "msg" : "No se encontro el usuario", 
                });
                return;
            }
            res.status(200).json({
                "msg" : "Usuario encontrado con exito",
                user
            })
            return;
        } catch (error){
            console.log(error);
            res.status(500).json({
                "msg" : "Ocurrio un error al obtener los usuarios",
            });
            return;
        }
    },
    login : async (req, res) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await UserModel.findOne({email, password});
            if (!user){
                res.status(401).json ({
                    "msg" : "Credenciales invalidas"
                });
                return;
            }
            //un objeto lo transporma a texto stringify 
            const token = just.sign(JSON.stringify(user), "shh");

            res.status(200).json({
                "msg" : "Loggeado con exito",
                user
            })
            return;
        } catch {
            console.log(error);
            res.status(500).json({
                "msg" : "Ocurrio un error al loggear usuario",
            });
            return;
        }
    }
}
