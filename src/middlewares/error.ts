import type { ErrorRequestHandler } from 'express';

const error: ErrorRequestHandler = (
  { isJoi, message },
  _req,
  res,
  _next,
) => {
  if (message.includes('required')) return res.status(400).json({ message });

  if (isJoi) return res.status(422).json({ message });

  return res.status(500).json({ message: 'Server error' });
};

export default error;