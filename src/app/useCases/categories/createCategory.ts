import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response){
  const { name, icon } = req.body;
  if(!name || !icon){
    return res.status(400).json({ error: 'name and icon is required.' });
  }
  const created = await Category.create({ name, icon });
  res.status(201).json(created);
}