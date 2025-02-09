import { db } from "../../../configs/database";

export class GroupService {

    async getGroups() {
        try {
            const [groups, fields] = await (await db).query('SELECT * FROM `Groups`');
            return groups;
        } catch(error) {
            throw new Error('Erro ao listar os grupos');
        }
    }
}