import { Request, Response } from "express";
import * as UserService from "../service/user";

export function getUsers(req: Request, res: Response) {
  return res.json(UserService.getUsers());
}

export async function createUser(req: Request, res: Response) {
  const { body } = req;
  const message = await UserService.createUser(body);
  return res.json(message);
}
