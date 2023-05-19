import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response){
  const { orderId } = req.params;
  const { status } = req.body;

  if(!status){
    return res.status(400).json({ error: 'Status is required to change.' });
  }

  try{
    const updated = await Order.findByIdAndUpdate(orderId, { status: status });
    res.json(updated);
  }
  catch(error){
    return res.status(400).json(error);
  }

}
