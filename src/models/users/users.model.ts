import { ResultSetHeader, Pool } from 'mysql2/promise';
import IUser from '../../interfaces/users.interface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<number> {
    const { username, classe, level, password } = user;

    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users
    (username, classe, level, password ) VALUES (?, ?, ?, ?)`,
      [username, classe, level, password],
    );
    const { insertId } = dataInserted;
    return insertId;
  }
}

export default UserModel;
