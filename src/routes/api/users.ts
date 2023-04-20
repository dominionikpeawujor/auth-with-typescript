import express from "express";
import { UserHandler } from "../../handlers/user";

const userMethod = new UserHandler();

const users = express.Router();

users.post('/', userMethod.create);

export default users;