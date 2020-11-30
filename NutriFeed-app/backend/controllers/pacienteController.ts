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


  insert = async (req, res) => {
    try {
      console.log(req.body)
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
}


export default PacienteController;
