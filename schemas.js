const mongoose = require('mongoose');

// Esquema de Servicios
const servicioSchema = new mongoose.Schema({
  nombre_servicio: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  }
});

// Esquema de Categorias
const categoriaSchema = new mongoose.Schema({
  nombre_categoria: {
    type: String,
    required: true
  },
  servicio_categoria: {
    type: String,
    required: true
  },
  id_servicio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Servicio'
  }
});

// Esquema de Servicios_Categorias (relación muchos a muchos entre Servicios y Categorias)
const servicioCategoriaSchema = new mongoose.Schema({
  id_servicio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Servicio',
    required: true
  },
  id_categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  }
});

// Esquema de Usuarios
const usuarioSchema = new mongoose.Schema({
  nombre_usuario: {
    type: String,
    required: true
  },
  tipo_usuario: {
    type: String,
    required: true
  }
});

// Esquema de Valoraciones
const valoracionSchema = new mongoose.Schema({
  val_buena: Number,
  val_regular: Number,
  val_mala: Number
});

// Esquema de Evaluaciones
const evaluacionSchema = new mongoose.Schema({
  id_servicio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Servicio',
    required: true
  },
  id_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  calificacion: {
    type: String,
    required: true
  },
  comentario: String,
  fecha_evaluacion: {
    type: Date,
    default: Date.now
  },
  valoracion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Valoracion'
  }
});

module.exports = {
  servicioSchema,
  categoriaSchema,
  servicioCategoriaSchema,
  usuarioSchema,
  valoracionSchema,
  evaluacionSchema
};
