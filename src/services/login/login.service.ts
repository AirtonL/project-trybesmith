import jwt from 'jsonwebtoken';

import connection from '../../models/connection';
import LoginModel from '../../models/login/login.model';

import IUserBody from '../../interfaces/users/user.login.body.interface';
import IUserLogin from '../../interfaces/users/user.login.service.interface';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async auth(userData: IUserBody): Promise<IUserLogin> {
    const { username, password } = userData;

    const user = await this.model.auth({ username, password });

    if (!user) return { message: 'Username or password invalid', token: undefined };

    const token = jwt.sign({ data: { id: user.id, username: user.username } }, 'ARE SECRET', {
      expiresIn: '1d',
      algorithm: 'HS256',
    });

    return { token, message: undefined };
  }
}

export default LoginService;