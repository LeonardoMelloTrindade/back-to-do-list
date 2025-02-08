import { Router } from "express";
import { GroupController } from "../controller/group.controller";

const groupController = new GroupController();

export const groupRouter = Router();

groupRouter.get('/groups', groupController.getGroups);