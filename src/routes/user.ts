import express from "express";
import { createUser, getUsers } from "../controller/user";
import { auth } from "../middlewares/auth";

const userRoutes = express.Router();

userRoutes.get("/", auth, getUsers);
userRoutes.post("/", createUser);

export default userRoutes;
