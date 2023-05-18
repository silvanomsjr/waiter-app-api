import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response){
  const { table, products } = req.body;
  const created = await Order.create({ table, products });
  res.status(200).json(created);
}