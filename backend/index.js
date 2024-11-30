import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { DatesModel } from './models/DatesModel.js';
import UserController from './controllers/UserController.js';
import { AnswerModel } from './models/AnswerModel.js';

mongoose.connect('mongodb://localhost:27017/encuestas')
    .then(() => {
        console.log('Conexión exitosa');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });

const app = express();
app.use(express.json());
app.use(cors());

// Rutas
app.get('/', (req, res) => {
    res.send('Hola desde servidor');
});

app.post('/create', async (req, res) => {
    const { uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez } = req.body;

    if (!uno || !dos || !tres || !cuatro || !cinco || !seis || !siete || !ocho || !nueve || !diez) {
        return res.status(400).json({
            msg: 'Necesitas ingresar todos los valores para almacenar un documento'
        });
    }

    const obj = { uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez };
    await DatesModel.create(obj);
    return res.status(200).json({
        msg: 'Cita almacenada con éxito'
    });
});

app.post('/save-answer', async (req, res) => {
    //arreglo del 1 al 10 porque son 10 preguntas
    const numberOfQuestion = Array.from({ length: 10 }, (_, i) => `pregunta_${i + 1}`);
    let flag = true;

    for (const nQ of numberOfQuestion) {
        if (!req.body[nQ]) {
            flag = false;
            break;
        }
    }

    if (!flag) {
        return res.status(400).json({
            msg: 'Datos incompletos'
        });
    }

    try {
        await AnswerModel.create(req.body);
        return res.status(200).json({
            msg: 'Datos almacenados con éxito'
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo salió mal al guardar respuestas',
            error
        });
    }
});

app.get('/get-answers', async (req, res) => {
    return res.status(200).json(await AnswerModel.find());
});

app.get('/get-answers-to-chart', async (req, res) => {
    const allAnswers = await AnswerModel.find(); //metodo para encontrar en bd
    let totalExcelente = 0;
    let totalRegular = 0;
    let totalMala = 0;

    for (const answer of allAnswers) {
        for (let i = 1; i <= 10; i++) {
            const answerPerQuestion = answer[`pregunta_${i}`];
            if (answerPerQuestion === 'Excelente') {
                totalExcelente++;
            } else if (answerPerQuestion === 'Regular') {
                totalRegular++;
            } else if (answerPerQuestion === 'Mala') {
                totalMala++;
            }
        }
    }

    return res.status(200).json([totalExcelente, totalRegular, totalMala]);
});

// Rutas de usuario
app.post('/user/create', UserController.createUser);
app.delete('/user/deleteUser/:id', UserController.deleteUser);
app.put('/user/update/:id', UserController.updateUser);
app.get('/users', UserController.getAllUser);
app.get('/user/:id', UserController.getUser);
app.post('/login', UserController.login);

// Inicio del servidor
app.listen(4000, () => {
    console.log('Servidor en línea en el puerto 4000');
});
