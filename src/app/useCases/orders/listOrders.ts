import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req:Request, res: Response){
  const orders = await Order.find();
  res.status(200).json(orders);
}