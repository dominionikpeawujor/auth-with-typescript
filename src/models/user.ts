import Client from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;

const pepper = BCRYPT_PASSWORD;
const saltRounds = SALT_ROUNDS!;

export type User = {
  id?: string;
  username: string;
  password: string;
};

export class UserStore {
  async create(u: User): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO users (username, password_digest) VALUES (&1,$2) RETURNING *';
      const hash = await bcrypt.hash(u.password + pepper, parseInt(saltRounds));

      const result = await conn.query(sql, [u.username, hash]);
      const user = result.rows[0];

      conn.release();

      return user;
    } catch (error) {
      throw new Error(`Cannot create user ${u.username} ${error}.`);
    }
  }
}
