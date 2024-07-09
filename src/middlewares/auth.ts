import config from "../config";
import e, { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { CustomError } from "../utils/CustomError";

export async function auth(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    const error = new CustomError("Unauthenticated", 401);
    next(error);
    return;
  }

  const token = authorization.split(" ");

  if (token.length !== 2 || token[0] !== "Bearer") {
    const error = new CustomError("Invalid token", 400);
    next(error);
    return;
  }

  const isValidToken = await verify(token[1], config.jwt.secret!);

  if (!isValidToken) {
    const error = new CustomError("Invalid token", 400);
    next(error);
    return;
  }

  next();
}
