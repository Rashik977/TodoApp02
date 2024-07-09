import { Router } from "express";
import userRoutes from "./task";

const router = Router();

router.use("/tasks", userRoutes);

export default router;
