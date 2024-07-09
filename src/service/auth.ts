import { sign } from "jsonwebtoken";
import { User } from "../interfaces/User";
import { getUserByEmail } from "./user";
import bcrypt from "bcrypt";
import config from "../config";

export async function login(body: Pick<User, "email" | "password">) {
  const existingUser = getUserByEmail(body.email);

  if (!existingUser) {
    return { error: "Invalid enail or password" };
  }

  const isvalidPassword = await bcrypt.compare(
    body.password,
    existingUser.password
  );

  if (!isvalidPassword) {
    return { error: "Invalid email or password" };
  }

  const payload = {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
  };

  const s = config.jwt.secret!;

  const accessToken = await sign(payload, s, {
    expiresIn: config.jwt.accessExpiration,
  });
  const refreshToken = await sign(payload, s, {
    expiresIn: config.jwt.refreshTokenExpiration,
  });

  return { accessToken, refreshToken };
}
