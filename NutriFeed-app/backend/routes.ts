import * as express from 'express';


function setRoutes(app): void{
  const router = express.Router();
  router.route("/paciente"); //recurso /api/alumno
  app.use('/api', router);//baseUri
}
export default setRoutes;