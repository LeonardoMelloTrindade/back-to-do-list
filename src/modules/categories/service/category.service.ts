import { db } from "../../../configs/database"
export class CategoryService {

    async getCategories() {
        try {
            const [categories, fields] = await (await db).query('SELECT * FROM `Categories`');
            return categories;
        } catch(error) {
            throw new Error('Erro ao listar as categorias:');
        }
    }

}