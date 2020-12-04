import Paciente from '../models/paciente';

class PacienteController{
  getAll = async (req, res) => {
    try {
      console.log("Request", req.headers);
      const paciente =  await Paciente.find({});
      res.status(200).json(paciente);
    } catch (err) {
      return res.status(400).json({error: err.message})
      }
    }

  findByNombre = async (req, res) => {
    try {
      console.log('Request en find', req.params.nombre);
      const paciente = await Paciente.find({
        nombre: { $regex: req.params.nombre, $options: 'i' },
      }).sort({ _id: '-1' });
      res.status(200).json(paciente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  findByApellido = async (req, res) => {
    try {
      console.log('Request en find', req.params.apellido);
      const paciente = await Paciente.find({
        apellido: { $regex: req.params.apellido, $options: 'i' },
      }).sort({ _id: '-1' });
      res.status(200).json(paciente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };


  insert = async (req, res) => {
    try {
      const paciente = await new Paciente(req.body).save();
      res.status(201).json(paciente);
    } catch (err) {

    }
  }

   count = async (req, res) => {
    try {
      const count = await Paciente.count();
      res.status(200).json(count);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }


  // Get by id
  get = async (req, res) => {
    try {
      const obj = await Paciente.findOne({ _id: req.params.id });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // Update by id
  update = async (req, res) => {
    try {
      await Paciente.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Delete by id
  delete = async (req, res) => {
    try {
      await Paciente.findOneAndRemove({ _id: req.params.id });
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  subirFoto = async (req, res, next) => {
    const file = req.file
    if(!file){
        const error = new Error('Please upload a file')
        res.status(400).json({ error: error.message });
        return next(error);
    }
    res.send(file.path);
    try {
      const { nombre, estado, edad, ciudad, altura, peso_actual, correo } = req.body;
      const infoPaciente = {
        nombre: nombre,
        estado: estado,
        edad: edad,
        ciudad: ciudad,
        altura: altura,
        peso_actual: peso_actual,
        correo: correo,
        imageUrl: file.path,
      }
      const paciente = await new Paciente(infoPaciente).save();
      res.status(201).json(paciente);
    } catch (err) { }
  }
}


export default PacienteController;
