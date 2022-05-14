import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const userSchema = Joi.object().keys({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const isValidProduct = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);
  if (error) throw error;

  next();
};

export default isValidProduct;