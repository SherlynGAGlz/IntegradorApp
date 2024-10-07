const mongoose = require('mongoose');
const {   servicioSchema, categoriaSchema, servicioCategoriaSchema, usuarioSchema, valoracionSchema, evaluacionSchema } = require('./schemas');

const servicioModel = mongoose.model('Servicio', servicioSchema);
const categoriaModel = mongoose.model('Categoria', categoriaSchema);
const servicioCategoriaModel = mongoose.model('Servicio_Categoria', servicioCategoriaSchema);
const usuarioModel = mongoose.model('Usuario', usuarioSchema);
const valoracionModel = mongoose.model('Valoracion', valoracionSchema);
const evaluacionModel = mongoose.model('Evaluacion', evaluacionSchema);

module.exports = {
  servicioModel,
  categoriaModel,
  servicioCategoriaModel,
  usuarioModel,
  valoracionModel,
  evaluacionModel
};