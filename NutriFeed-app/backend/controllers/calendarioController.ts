import Calendario from '../models/calendario';

class CalendarioController {
  getAll = async (req, res) => {
    try {
      console.log('Request', req.headers);
      const cal = await Calendario.find({});
      res.status(200).json(cal);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  insert = async (req, res) => {
    try {
      console.log(req.body)
      const cal = await new Calendario(req.body).save();
      res.status(201).json(cal);
    } catch (err) {

    }
  }

   count = async (req, res) => {
    try {
      const count = await Calendario.count();
      res.status(200).json(count);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }


  // Get by id
  get = async (req, res) => {
    try {
      const obj = await Calendario.findOne({ _id: req.params.id });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // Update by id
  update = async (req, res) => {
    try {
      await Calendario.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Delete by id
  delete = async (req, res) => {
    try {
      await Calendario.findOneAndRemove({ _id: req.params.id });
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  deleteByEmail = async (req, res) => {
    console.log('req', req.params);
    try {
      await Calendario.findOneAndRemove({ correoUsuario: req.params.correo });
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}


export default CalendarioController;
