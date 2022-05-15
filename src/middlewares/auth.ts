import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import IPayload from '../interfaces/jwt/payload';

const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const { data } = jwt.verify(token, 'ARE SECRET') as IPayload;
    req.userId = data.id;
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
};

export default verify;
