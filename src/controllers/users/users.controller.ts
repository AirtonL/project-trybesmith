import { Request, Response, NextFunction } from 'express';

import UsersService from '../../services/users/users.service';

class UsersController {
  constructor(public usersService = new UsersService()) { }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, classe, level, password } = req.body;

      const token = await this.usersService.create({ username, classe, level, password });

      return res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;