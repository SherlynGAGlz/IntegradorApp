const mongoose = required('mongoose');
const {
  servicioSchema,
  categoriaSchema,
  servicioCategoriaSchema,
  usuarioSchema,
  valoracionSchema,
  evaluacionSchema
} = required('./schemas');

const servicioModel = mongoose.model('Servicio', servicioSchema);
const categoriaModel = mongoose.model('Categoria', categoriaSchema);
const servicioCategoriaModel = mongoose.model('ServicioCategoria', servicioCategoriaSchema);
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
