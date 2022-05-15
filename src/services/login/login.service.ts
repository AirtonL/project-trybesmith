import jwt from 'jsonwebtoken';
import IUserBody from '../../interfaces/user.login.body.interface';
import connection from '../../models/connection';
import LoginModel from '../../models/login/login.model';

interface IUserLogin {
  message: string | undefined;
  token: string | undefined;
}

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