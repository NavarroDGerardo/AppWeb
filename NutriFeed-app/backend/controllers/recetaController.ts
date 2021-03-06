import Paciente from 'models/paciente';
import Receta from '../models/receta';

class RecetaController{
  getAll = async (req, res) => {
    try {
      console.log('Request', req.headers);
      const receta = await Receta.find({}).sort({ _id: '-1' });
      res.status(200).json(receta);
    } catch (err) {
      return res.status(400).json({error: err.message})
    }
  };

  findByIngrediente = async (req, res) => {
    try {
      console.log('Request en find', req.params.ing);
      const receta = await Receta.find({
        ingrediente: { $regex: req.params.ing, $options: 'i' },
      }).sort({ _id: '-1' });
      res.status(200).json(receta);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  findByNombreReceta = async (req, res) => {
    try {
      console.log('Request en find', req.params.nombre);
      const receta = await Receta.find({
        nombre: { $regex: req.params.nombre, $options: 'i' },
      }).sort({ _id: '-1' });
      res.status(200).json(receta);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  findByHashtags = async (req, res) => {
    try {
      console.log('Request en find', req.params.hashtag);
      const receta = await Receta.find({
        hashtags: { $regex: req.params.hashtag, $options: 'i' },
      }).sort({ _id: '-1' });
      res.status(200).json(receta);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  insert = async (req, res) => {
    try {
      console.log(req.body)
      const receta = await new Receta(req.body).save();
      res.status(201).json(receta);
    } catch (err) {

    }
  }

  addReceta = async (req, res, next) => {
    const file = req.file
    if(!file){
      const error = new Error('Please upload a file')
      res.status(400).json({ error: error.message });
      return next(error);
    }
    //res.send(file.path);
    try{
      const{ nombre, publicado_por, ingrediente, descripcion, imagen, tipo, hashtags, fecha } = req.body;
      const infoReceta = {
        nombre: nombre,
        publicado_por: publicado_por,
        ingrediente: ingrediente,
        descripcion: descripcion,
        imagen: file.path,
        tipo: tipo,
        hashtags: hashtags,
        fecha: fecha,
      }
      const receta = await new Receta(infoReceta).save();
      res.status(201).json(receta);
    } catch(err){ }
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
