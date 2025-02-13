import { db } from "../../../configs/database";

export class TaskService {

    async getTasks() {
        try {
            const [task, fields] = await (await db).query('SELECT * FROM `Tasks`');
            return task;
        } catch(error) {
            throw Error('Erro ao listar as tarefas');
        }
    }
}