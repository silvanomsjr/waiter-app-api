import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { getProductByCategory } from './app/useCases/products/getProductByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';

export const routes = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback){
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// Listar categorias

routes.get('/categories', listCategories);

// Criar categoria

routes.post('/categories', createCategory);

// Listar produtos

routes.get('/products', listProducts);

// Criar produtos

routes.post('/products', upload.single('image'), createProduct);

// Get produto por categoria

routes.get('/products/:categoryId', getProductByCategory);







// Listar orders

routes.get('/orders', listOrders);

// Criar order

routes.post('/orders', createOrder);

// Alterar order status

routes.patch('/orders/:orderId', (req, res) => {
  res.send('/orders/:orderId');
});

// Deletar ou cancelar order

routes.delete('/orders/:orderId', (req, res) => {
  res.send('/orders/:orderId');
});
