import * as express from 'express';
import { Express } from 'express-serve-static-core';
import UsuarioController from './controllers/usuarioController'
import RecetaController from './controllers/recetaController'
import PacienteController from './controllers/pacienteController'
import CalendarioController from './controllers/calendarioController';
import multer from './libs/multer';

//jwt
 var jwt = require('express-jwt');
 var jwks = require('jwks-rsa');
/// npm
///fin de jwt npm install jsonwebtoken

function setRoutes(app: Express): void{
  const router = express.Router();
  const usuarioController = new UsuarioController();
  const recetaController = new RecetaController();
  const pacienteController = new PacienteController();
  const calendarioController = new CalendarioController();

  router.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
      res.set(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      );
      res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    }
    next();
  }); //funcion habilita el middleware
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-3hczp56w.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:3000/',
    issuer: 'https://dev-3hczp56w.us.auth0.com/',
    algorithms: ['RS256'],
  });

  router.route('/addUser').post(usuarioController.insert);

  //receta
  router.route('/addReceta').post(recetaController.insert);
  router.route('/addRecetaFoto').post(multer.single('file'), recetaController.addReceta);
  router.route('/allReceta').get(recetaController.getAll);
  router.route('/deleteReceta/:id').delete(recetaController.delete);
  router.route('/editReceta/:id').post(recetaController.update);
  router.route('/getReceta/:id').get(recetaController.get);
  router.route('/getByIngrediente/:ing').get(recetaController.findByIngrediente);
  router.route('/getByNombre/:nombre').get(recetaController.findByNombreReceta);
  router.route('/getByHashtag/:hashtag').get(recetaController.findByHashtags);

  //paciente
  router.route('/infoPaciente/:id').get(pacienteController.get);
  router.route('/addPaciente').post(pacienteController.insert);
  router.route('/GetAllPaciente').get(pacienteController.getAll);
  router.route('/deletePaciente/:id').delete(pacienteController.delete);
  router.route('/editePaciente/:id').post(pacienteController.update);
  router.route('/getPacienteNombre/:nombre').get(pacienteController.findByNombre);
  router.route('/getPacienteApellido/:apellido').get(pacienteController.findByApellido);
  router.route('/registrarDieta/:id').post(pacienteController.insertDieta);
  router.route('/registrarProgreso/:id').post(pacienteController.insertProgreso);
  router.route('/addDiario/:id').post(multer.array('files'),pacienteController.insertDiario);
  router.route('/addPacienteFoto').post(multer.single('file'), pacienteController.subirFoto);


  //calendario
  router.route('/addHorario').post(calendarioController.insert);
  router.route('/showHorario').get(calendarioController.getAll);
  router.route('/deletePacienteHorario/:id').delete(calendarioController.delete);
  router.route('/editPacienteHorario/:id').post(calendarioController.update);
  router.route('/getPacienteHorario/:id').get(calendarioController.get);
  //ejemplos
  // router.route('/alumno/:id').get(alumnoController.get);
  // router.route('/alumno/:id').put(alumnoController.update);
  // router.route('/alumno/:id').delete(alumnoController.delete);
  // router.route("/addUser").get(alumnoController.getAll); //recurso /api/alumno
  // router.route('/alumnos/count').get(alumnoController.count);

  //app.use(jwtCheck);

  app.use('/api', router); //baseUri
}
export default setRoutes;
