import Usuario from '../models/usuario';

class UsuarioController{
  getAll = async (req, res) => {
    try {
      console.log("Request", req.headers);
      const user =  await Usuario.find({});
      res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({error: err.message})
      }
    }


  insert = async (req, res) => {
    try {
      console.log(req.body)
      const user = await new Usuario(req.body).save();
      res.status(201).json(user);
    } catch (err) {

    }
  }

   count = async (req, res) => {
    try {
      const count = await Usuario.count();
      res.status(200).json(count);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }


  // Get by id
  get = async (req, res) => {
    try {
      const obj = await Usuario.findOne({ _id: req.params.id });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // Update by id
  update = async (req, res) => {
    try {
      await Usuario.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Delete by id
  delete = async (req, res) => {
    try {
      await Usuario.findOneAndRemove({ _id: req.params.id });
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}


export default UsuarioController;
