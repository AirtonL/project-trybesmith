import jwt from 'jsonwebtoken';
import connection from '../../models/connection';
import UsersModel from '../../models/users/users.model';
import IUsers from '../../interfaces/users.interface';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: IUsers): Promise<string> {
    await this.model.create(user);
    const token = jwt.sign({}, 'ARE SECRET', {
      expiresIn: '1d',
      subject: `${user.username}`,
    });
    return token;
  }
}

export default UsersService;