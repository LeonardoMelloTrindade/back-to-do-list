import { db } from "../../../configs/database";

export class GroupService {

    async getGroups() {
        try {
            const groups = (await db).query('SELECT * FROM `Grupos`');
            return groups;
        } catch(error) {
            throw new Error('Erro ao listar os grupos');
        }
    }
}