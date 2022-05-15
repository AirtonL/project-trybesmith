import jwt from 'jsonwebtoken';
import connection from '../../models/connection';
import UsersModel from '../../models/users/users.model';
import IUsers from '../../interfaces/users/users.interface';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: IUsers): Promise<string> {
    const id = await this.model.create(user);

    const token = jwt.sign({ data: { id, username: user.username } }, 'ARE SECRET', {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  }
}

export default UsersService;
