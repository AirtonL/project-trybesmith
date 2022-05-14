import { Request, Response } from 'express';
import UsersService from '../../services/users/users.service';

class UsersController {
  constructor(public usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;

    const token = await this.usersService.create({ username, classe, level, password });

    res.status(201).json({ token });
  };
}

export default UsersController;