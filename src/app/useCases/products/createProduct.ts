import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response){
  const imagePath = req.file?.filename;
  const { name, description, price, category, ingredients } = req.body;
  const product = await Product.create({
    name,
    description,
    imagePath,
    price: Number(price),
    category,
    ingredients: ingredients ? JSON.parse(ingredients) : [],
  });

  res.status(200).json(product);
}