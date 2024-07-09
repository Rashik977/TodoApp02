import { User } from "../interfaces/User";
import * as UserModel from "../model/user";
import bcrypt from "bcrypt";
import { CustomError } from "../utils/CustomError";

export const getUsers = () => {
  const users = UserModel.getUsers();

  if (!users) throw new CustomError("No users found", 404);

  return users;
};

export async function createUser(user: User) {
  if (!user.email || !user.password || !user.name)
    throw new CustomError("Email, name and password are required", 400);

  const existingUser = await getUserByEmail(user.email);
  if (existingUser) {
    throw new CustomError("User already exists", 400);
  }
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
  UserModel.createUser(user);
  return user;
}

export function getUserByEmail(email: string) {
  return UserModel.getUserByEmail(email);
}
