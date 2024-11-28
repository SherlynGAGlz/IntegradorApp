import express from 'express';
import mongoose, { mongo } from 'mongoose';
import { DatesModel } from './models/DatesModel.js';
import UserController from "./controllers/UserController.js";
import { AnswerModel } from './models/AnswerModel.js';


mongoose.connect('mongodb://localhost:27017/encuestas').then(
    ()=>{
        console.log('Conexion exitosa')
    }
)

const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
res.send('Hola desde servidor')
})

app.post('/create', async (req,res)=>{
    const uno = req.body.uno;
    const dos = req.body.dos;
    const tres = req.body.tres;
    const cuatro = req.body.cuatro;
    const cinco = req.body.cinco;
    const seis = req.body.seis;
    const siete = req.body.siete;
    const ocho = req.body.ocho;
    const nueve = req.body.nueve;
    const diez = req.body.diez;
    if(!uno||!dos||!tres||!cuatro||!cinco||!seis||!siete||!ocho||!nueve||!diez){
        return res.status(400).json({
            msg:"Necesitas ingresar todos los valores oara almacenar un documento"
        })
    }
    const obj = {
        uno,
        dos,
        tres,
        cuatro,
        cinco,
        seis,
        siete,
        ocho,
        nueve,
        diez
    }
    DatesModel.create(obj);
    return res.status(200).json({
        msg:"Cita almacenada con exito"
    })
})
app.post("/save-answer", async (req, res) =>{
    console.log(req.body)
    //arreglo de 1 a 10 porque son 10 preguntas 
    const numberOfQuestion = Array.from (20).keys()
    let flag = true;
    for (const nQ of numberOfQuestion) {
        console.log(nQ)
        if (!req.body[`pregunta_${nQ}`]){
            flag = false;
        }
    }
    if (!flag){
        res.status(400).json({
            "msg" : "Datos incompletos"
        })
        return ;
    }
    try {
        await AnswerModel.create(req.body)
        return res.status(200).json({
            "msg" : "Datos almacenados con exito"
        })
    } catch (error) {
        res.status(500).json({
            "msg" : "Algo salio mal al guardar respuestas"
        })
    }
})

app.get("/get-answers", async (req, res) => {
    return res.status(200).json(await AnswerModel.find())
})

app.get("/get-answers", async (req, res) => {
    return res.status(200).json(await AnswerModel.find())
})

app.get("/get-answers-to-chart", async (req, res) => {
    const allAnswers = await AnswerModel.find(); //metodo para encontrar en bd
    let totalExcelente = 0;
    let totalRegular = 0;
    let totalMala = 0;

    for (const answer of allAnswers){
        for (let i = 0; i < 10; i ++){
            const answerPerQuestion = answer [`pregunta_${i}`]
            if (answerPerQuestion === "Excelente"){
                totalExcelente ++ 
            } else if (answerPerQuestion === "Regular"){
                totalRegular ++
            } else (answerPerQuestion === "Mala")
                totalMala ++
        }
    }
    return res.status(200).json([
        totalExcelente, 
        totalRegular,
        totalMala
    ])
})



app.post("/user/create", UserController.createUser);
app.delete("/user/deleteUser/:id", UserController.deleteUser);
app.put("/user/update/:id", UserController.updateUser);
app.get("/users", UserController.getAllUser);
app.get("user/:id", UserController.getUser);
app.post("/login", UserController.login);

app.listen(4000, ()=>{
    console.log('Servidor en linea')
})