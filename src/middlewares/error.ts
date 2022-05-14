import { Request, Response, NextFunction } from 'express';

const error = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  // console.log(err.details);
  // console.log(err.details[0].message);
  // console.log(err.details[0].path[0]);
  // console.log(`${err.details[0].path[0]} is required`);
  if (err.details[0].message === `"${err.details[0].path[0]}" is required`) {
    return res.status(400).json({ message: err.message });
  }
  if (err.isJoi) return res.status(422).json({ message: err.message });

  return res.status(500).json({ message: 'Server error' });
};

export default error;