import { sign, verify } from "jsonwebtoken";
import { User } from "../interfaces/User";
import { getUserByEmail } from "./user";
import bcrypt from "bcrypt";
import config from "../config";
import { CustomError } from "../utils/CustomError";

export async function login(body: Pick<User, "email" | "password">) {
  const existingUser = getUserByEmail(body.email);

  if (!existingUser) {
    throw new CustomError("Invalid email", 400);
  }

  const isvalidPassword = await bcrypt.compare(
    body.password,
    existingUser.password
  );

  if (!isvalidPassword) {
    throw new CustomError("Invalid password", 400);
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

export async function refresh(body: { refreshToken: string }) {
  try {
    // Verify the refresh token
    const { id, name, email } = verify(
      body.refreshToken,
      config.jwt.secret!
    ) as Pick<User, "id" | "name" | "email">;

    // Extract the payload
    const payload = {
      id: id,
      name: name,
      email: email,
    };

    // Generate new access token
    const accessToken = sign(payload, config.jwt.secret!, {
      expiresIn: config.jwt.accessExpiration,
    });

    // Generate new refresh token
    const refreshToken = sign(payload, config.jwt.secret!, {
      expiresIn: config.jwt.refreshTokenExpiration,
    });

    return { accessToken, refreshToken };
  } catch (error) {
    // Handle error (invalid token, etc.)
    throw new CustomError("Invalid token", 400);
  }
}
