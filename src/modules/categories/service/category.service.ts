import { db } from "../../../configs/database"
export class CategoryService {

    async getCategories() {
        try {
            const categories = (await db).query('SELECT * FROM `Categorias`');
            return categories;
        } catch(error) {
            throw new Error('Erro ao listar as categorias:');
        }
    }

}