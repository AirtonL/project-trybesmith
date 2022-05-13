import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const productSchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const isValidProduct = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);
  if (error) throw error;

  next();
};

export default isValidProduct;