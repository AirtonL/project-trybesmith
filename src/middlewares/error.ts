import type { ErrorRequestHandler } from 'express';

const error: ErrorRequestHandler = (
  err,
  _req,
  res,
  _next,
) => {
  if (err.details[0].message === `"${err.details[0].path[0]}" is required`) {
    return res.status(400).json({ message: err.message });
  }
  if (err.isJoi) return res.status(422).json({ message: err.message });

  return res.status(500).json({ message: 'Server error' });
};

export default error;