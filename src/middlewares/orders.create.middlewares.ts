import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const ordersSchema = Joi.object().keys({
  productsIds: Joi.array().required().min(1)
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
});

const validOrders = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = ordersSchema.validate(req.body);
  if (error) throw error;

  next();
};

export default validOrders;