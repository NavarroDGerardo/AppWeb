import * as mongoose from 'mongoose';

const usuarios = new mongoose.Schema({
  nombre: String,
  apellido: String,
});

const Usuario = mongoose.model("Usuario", usuarios);

export default Usuario;
