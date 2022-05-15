import { ResultSetHeader, Pool } from 'mysql2/promise';
import IUser from '../../interfaces/users/users.interface';

class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<number> {
    const { username, classe, level, password } = user;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users
    (username, classe, level, password ) VALUES (?, ?, ?, ?)`,
      [username, classe, level, password],
    );
  
    return insertId;
  }
}

export default UserModel;
