import express from "express";
import { createUser, getUsers } from "../controller/user";

const userRoutes = express.Router();

userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);

export default userRoutes;
