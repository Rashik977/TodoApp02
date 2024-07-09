import { NextFunction, Request, Response } from "express";

import * as AuthServices from "../service/auth";

export async function login(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  try {
    const data = await AuthServices.login(body);
    res.json(data);
  } catch (e) {
    next(e);
  }
}

export async function refresh(req: Request, res: Response, next: NextFunction) {
  const { body } = req;

  try {
    const data = await AuthServices.refresh(body);
    res.json(data);
  } catch (e) {
    next(e);
  }
}
