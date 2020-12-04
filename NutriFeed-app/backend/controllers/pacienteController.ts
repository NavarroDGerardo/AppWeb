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
      console.log(req.body)
      const paciente = await new Paciente(req.body).save();
      res.status(201).json(paciente);
    } catch (err) {

    }
  }

  insertDieta = async (req, res) => {
    try {
      console.log('el body', req.body);
      await Paciente.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { dieta: req.body } }
      );
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  insertProgreso = async (req, res) => {
    try {
      console.log('el body', req.body);
      await Paciente.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { progreso: req.body } }
      );
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
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

  subirFoto = async(req, res) => {
    return res.json({message: "mensaje subido exitosamente"});
  }
}


export default PacienteController;
