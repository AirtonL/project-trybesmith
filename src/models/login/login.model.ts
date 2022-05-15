import { Pool } from 'mysql2/promise';
import IUserBody from '../../interfaces/user.login.body.interface';
import IUser from '../../interfaces/users.interface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async auth(userData: IUserBody): Promise<IUser> {
    const { username, password } = userData;
    const [user] = await this.connection.execute(
      `SELECT * FROM Trybesmith.Users
      WHERE username=? AND password=?`,
      [username, password],
    );

    const [rows] = user as IUser[];
    return rows;
  }
}

export default UserModel;