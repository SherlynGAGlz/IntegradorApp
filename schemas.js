const mongoose = require('mongoose');

// Esquema de Servicios
const servicioSchema = new mongoose.Schema({
  id_servicio: {
    type: String,
    required: true
  },
  nombre_servicio: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  }
});
// Esquema de Servicios_Categorias
const servicioCategoriaSchema = new mongoose.Schema({
  id_servicio: {
    type: String,
    required: true
  },
  id_categoria: {
    type: String,
    required: true
  }
});

// Esquema de Categorias
const categoriaSchema = new mongoose.Schema({
  id_categoria: {
    type: String,
    required: true
  },
  nombre_categoria: {
    type: String,
    required: true
  },
  servicio_categoria: {
    type: String,
    required: true
  },
  id_servicio: {
    type: String,
    require: true
  }
});
// Esquema de Usuarios
const usuarioSchema = new mongoose.Schema({
  id_usuario: {
    type: String,
    required: true
  },
  nombre_usuario: {
    type: String,
    required: true
  },
  tipo_usuario: {
    type: String,
    required: true
  }
});
// Esquema de Evaluaciones
const evaluacionSchema = new mongoose.Schema({
  id_evaluacion: {
    type: String,
    required: true
  },
  id_servicio: {
    type: String,
    required: true
  },
  id_usuario: {
    type: String,
    required: true
  },
  calificacion: {
    type: Number,
    required: true
  },
  comentario: {
    type: String,
    required: true
  },
  fecha_evaluacion: {
    type: Date,
    default: Date.now
  },
});
// Esquema de Valoraciones
const valoracionSchema = new mongoose.Schema({
  val_buena: {
    type: Number,
    require: true
  },
  val_regular: {
    type: Number,
    require: true
  },
  val_mala: {
    type: Number,
    require: true
  },
});



module.exports = {
  servicioSchema,
  categoriaSchema,
  servicioCategoriaSchema,
  usuarioSchema,
  valoracionSchema,
  evaluacionSchema
};
