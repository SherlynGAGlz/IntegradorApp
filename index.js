const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/universidad_encuestas';
const {
  servicioModel,
  categoriaModel,
  servicioCategoriaModel,
  usuarioModel,
  valoracionModel,
  evaluacionModel
} = require('./models');//Exportando los modelos

app.use(express.json());

// Endpoint para obtener todos los servicios
app.get('/servicios', async (req, res) => {
  try {
    const servicios = await servicioModel.find({});
    return res.json({ servicios });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Error' });
  }
});

// Endpoint para crear un nuevo servicio
app.post('/servicios', async (req, res) => {
  try {
    const { nombre_servicio, ubicacion } = req.body;
    const servicio = new servicioModel({ nombre_servicio, ubicacion });
    const save = await servicio.save();
    return res.status(201).json({ servicio: save });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Error' });
  }
});

// Endpoint para obtener evaluaciones de un servicio
app.get('/evaluaciones/:servicioId', async (req, res) => {
  try {
    const { servicioId } = req.params;
    const evaluaciones = await evaluacionModel.find({ id_servicio: servicioId }).populate('id_usuario').populate('valoracion');
    return res.json({ evaluaciones });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Error' });
  }
});

// Conectar a MongoDB y levantar el servidor
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexion exitosa');
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Conexion fallida', error);
  });
