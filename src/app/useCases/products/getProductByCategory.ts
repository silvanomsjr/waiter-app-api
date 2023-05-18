import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function getProductByCategory(req: Request, res: Response){

  const { categoryId } = req.params;

  const categoryIdExists = await Product.find().where('category').equals(categoryId);

  if(!categoryIdExists){
    return res.status(400).json({ error: 'categoryId doesn\'t exists.' });
  }

  res.json(categoryIdExists);

}