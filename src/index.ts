import path from 'node:path';
import express from 'express';
import { routes} from './routes';
import mongoose from 'mongoose';

const app = express();
const port = 3001;
const mongodbPort = 27017;

mongoose.connect(`mongodb://localhost:${mongodbPort}`)
  .then(() => {
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(routes);
    app.listen(port, () => {
      console.log('Server is running at: http://localhost:'+port);
    });
  })
  .catch(() => console.log('Erro para rodar o MongoDB'));



