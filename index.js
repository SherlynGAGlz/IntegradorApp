const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/cuestionario_uni';
const {servicioModel, categoriaModel, servicioCategoriaModel, usuarioModel, valoracionModel, evaluacionModel } = require('./models');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola servidor :)!');
});

app.post('/servicios',(req, res) => { 
    const id_servicio = req.body.id_servicio;
    const nombre_servicio = req.body.nombre_servicio;
    const ubicacion = req.body.ubicacion;

    if (!id_servicio || !nombre_servicio || !ubicacion ) {
      return res.status(400).json({ message: 'Error !' });
    }
});

app.post('/servicios_categorias',(req, res) => { 
  const id_servicio = req.body.id_servicio;
  const id_categoria = req.body.id_categoria;

  if (!id_servicio || !id_categoria ) {
    return res.status(400).json({ message: 'Error !' });
  }
});

app.post('/categorias',(req, res) => { 
  const id_categoria = req.body.id_categoria;
  const nombre_categoria = req.body.nombre_categoria;
  const servicio_categoria = req.body.servicio_categoria;
  const id_servicio = req.body.id_servicio;

  if (!id_categoria || !nombre_categoria || !servicio_categoria|| !id_servicio ) {
    return res.status(400).json({ message: 'Error !' });
  }
});

app.post('/usuarios',(req, res) => { 
  const id_usuario = req.body.id_usuario;
  const nombre_usuario = req.body.nombre_usuario;
  const tipo_usuario = req.body.tipo_usuario;

  if (!id_usuario || !nombre_usuario || !tipo_usuario ) {
    return res.status(400).json({ message: 'Error !' });
  }
});

app.post('/evaluaciones',(req, res) => { 
  const id_evaluacion = req.body.id_evaluacion;
  const id_servicio = req.body.id_servicio;
  const id_usuario = req.body.id_usuario;
  const calificacion = req.body.calificacion;
  const comentario = req.body.comentario;
  const fecha_evaluacion = req.body.fecha_evaluacion;

  if (!id_evaluacion || !id_servicio || !id_usuario|| !calificacion|| !comentario|| !fecha_evaluacion ) {
    return res.status(400).json({ message: 'Error !' });
  }
});

app.post('/valoraciones',(req, res) => { 
  const val_buena = req.body.val_buena;
  const val_regular = req.body.val_regular;
  const val_mala = req.body.val_mala;

  if (!val_buena || !val_regular || !val_mala ) {
    return res.status(400).json({ message: 'Error !' });
  }
});


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connection success');
    app.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Connection fail', error);
  });
