import { Request, Response } from 'express';
import { CategoryService } from "../service/category.service";

export class CategoryController {
    categoryService: CategoryService

    constructor() {
        this.categoryService = new CategoryService();
        this.getCategories = this.getCategories.bind(this);
    }

    async getCategories(req: Request, res: Response) {
        const categories = await this.categoryService.getCategories();
        res.send(categories);
    }
}