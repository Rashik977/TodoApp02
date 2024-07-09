import { NextFunction, Request, Response } from "express";
import * as UserService from "../service/user";

export function getUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = res.json(UserService.getUsers());
    return users;
  } catch (e) {
    next(e);
  }
}

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { body } = req;

  try {
    const message = await UserService.createUser(body);
    return res.json(message);
  } catch (e) {
    next(e);
  }
}
