import * as mongoose from 'mongoose';

const calendario = new mongoose.Schema({
  nombre: String,
  apellido: String,
  hora: String,
  fecha: String,
  correoUsuario: String,
});

const Calendario = mongoose.model('Calendario', calendario);

export default Calendario;
