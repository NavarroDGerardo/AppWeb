import * as mongoose from 'mongoose';

const paciente = new mongoose.Schema({
  nombre: String,
  apellido: String,
  estado: String,
  edad: String,
  ciudad: String,
  altura: String,
  peso_actual: String,
  correo: String,
  imageUrl: String,
  dieta: [{
    desayuno: String,
    colacion_uno: String,
    comida: String,
    colacion_dos: String,
    cena: String,
  }],
  progreso: [{
      peso: String,
      fecha: String,
      imc: String,
  }],
  diario: [{
    descripcion_desayuno: String,
    descripcion_comida: String,
    descripcion_cena: String,
    image_desayuno: String,
    image_comida: String,
    image_cena: String
  }]
});

const Paciente = mongoose.model("Paciente", paciente);

export default Paciente;
