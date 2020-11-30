import * as mongoose from 'mongoose';

const recetas = new mongoose.Schema({
  nombre: String,
  publicado_por: String,
  ingrediente: String,
  descripcion: String,
  imagen: String,
  tipo: String,
  hashtags: String,
  fecha: String,
});

const Receta = mongoose.model("Receta", recetas);

export default Receta;
