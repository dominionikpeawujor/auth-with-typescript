import dotenv from 'dotenv';
import { User, UserStore } from '../models/user';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

dotenv.config();

const store = new UserStore();
const { TOKEN_SECRET } = process.env;

export class UserHandler {
  async create(_req: Request, res: Response) {
    const { username, password } = _req.body;
    const user: User = {
      username,
      password,
    };

    try {
      const newUser = await store.create(user);
      let token = jwt.sign({ user: newUser }, String(TOKEN_SECRET));
      res.status(201).send(token);
    } catch (error) {
      res.status(400);
      res.json(String(error) + user);
    }
  }
}
