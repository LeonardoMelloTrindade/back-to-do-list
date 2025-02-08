import { Router } from "express";
import { CategoryController } from "../controller/category.controller";

const categoryController = new CategoryController();

export const categoryrouter = Router();

categoryrouter.get('/category', categoryController.getCategories)

