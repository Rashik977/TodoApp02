import { User } from "../interfaces/User";

// Array to store users, 1 dummy user for testing
export const users: User[] = [
  {
    name: "rashik",
    email: "rkoirala43@gmail.com",
    password: "$2b$10$TGpMkx0Vrux.jO30w88BceN1Tb8IN6MApt7uoNFt8ufiNG8gi4gyy",
    id: "1",
  },
];

export function getUsers() {
  return users;
}

export function createUser(user: User) {
  return users.push({
    name: user.name,
    email: user.email,
    password: user.password,
    id: `${users.length + 1}`,
  });
}

export function getUserByEmail(email: string) {
  return users.find((user) => user.email === email);
}
