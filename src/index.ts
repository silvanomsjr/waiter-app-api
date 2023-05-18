import path from 'node:path';
import express from 'express';
import { routes} from './routes';
import mongoose from 'mongoose';

const app = express();
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(routes);
    app.listen(3001, () => {
      console.log('Server is running at: http://localhost:3001');
    });
  })
  .catch(() => console.log('Erro para rodar o MongoDB'));



