import { Order } from '../../models/Order';
import { Request, Response } from 'express';

export async function cancelOrder(req:Request, res:Response){
  const { orderId } = req.params;

  try{
    await Order.findByIdAndRemove(orderId);
    res.sendStatus(204);
  }
  catch(error){
    return res.status(400).json(error);
  }


}
