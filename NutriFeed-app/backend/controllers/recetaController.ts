import Receta from '../models/receta';

class RecetaController{
  getAll = async (req, res) => {
    try {
      console.log("Request", req.headers);
      const receta = await Receta.find({}).sort({ _id: '-1' });
      res.status(200).json(receta);
    } catch (err) {
      return res.status(400).json({error: err.message})
      }
    }


  insert = async (req, res) => {
    try {
      console.log(req.body)
      const receta = await new Receta(req.body).save();
      res.status(201).json(receta);
    } catch (err) {

    }
  }

   count = async (req, res) => {
    try {
      const count = await Receta.count();
      res.status(200).json(count);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }


  // Get by id
  get = async (req, res) => {
    try {
      const obj = await Receta.findOne({ _id: req.params.id });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // Update by id
  update = async (req, res) => {
    try {
      await Receta.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Delete by id
  delete = async (req, res) => {
    try {
      await Receta.findOneAndRemove({ _id: req.params.id });
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}


export default RecetaController;
