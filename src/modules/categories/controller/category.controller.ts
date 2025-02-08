import { Request, Response } from 'express';
import { CategoryService } from "../service/category.service";

export class CategoryController {
    categoryService: CategoryService

    constructor() {
        this.categoryService = new CategoryService();
        this.getCategories = this.getCategories.bind(this);
    }

    getCategories(req: Request, res: Response) {
        try {
            res.send(this.categoryService.getCategories());
        } catch(error) {
            throw new Error('Erro ao listar os grupos:');
        }
    }
}