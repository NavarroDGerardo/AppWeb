import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import setMongo from './mongo';
import setRoutes from './routes';

//La forma de unir el frotn con el back
import { join } from 'path';
import cors = require('cors'); //importar cors para su uso

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();


app.set('port', 3000);
app.use(express.json());
app.use(cors(corsOptions))
app.options('*', cors())
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
async function main(): Promise<any>{
  try {
    await setMongo();
    setRoutes(app);
    app.listen(app.get('port'), () =>
      console.log(`Backend funciona en el puerto ${app.get('port')}`)
    );
  } catch (error) {
    console.error(error);
  }
}

app.use('/uploads', express.static(path.resolve('uploads')));

main();

export { app };
