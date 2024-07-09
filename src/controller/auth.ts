import { Request, Response } from "express";

import * as AuthServices from "../service/auth";

export async function login(req: Request, res: Response) {
  const { body } = req;
  const data = await AuthServices.login(body);

  res.json(data);
}
