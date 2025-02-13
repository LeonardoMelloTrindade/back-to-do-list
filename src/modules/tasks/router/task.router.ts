import { Router } from "express";
import { TaskController } from "../controller/task.controller";

const taskController = new TaskController();

export const taskRouter = Router();

taskRouter.get('/task', taskController.getTasks);