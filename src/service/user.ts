import { User } from "../interfaces/User";
import { users } from "../model/user";
import * as UserModel from "../model/user";
import bcrypt from "bcrypt";

export const getUsers = () => {
  return users;
};

export async function createUser(user: User) {
  if (!user.email || !user.password)
    return { error: "Email and password are required" };
  
  const existingUser = await getUserByEmail(user.email);
  if (existingUser) {
    return { error: "User already exists" };
  }
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
  UserModel.createUser(user);
  return user;
}

export function getUserByEmail(email: string) {
  return UserModel.getUserByEmail(email);
}
