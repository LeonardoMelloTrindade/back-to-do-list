import { Request, Response } from "express";
import { TaskService } from "../service/task.service";


export class TaskController {
    taskService: TaskService;

    constructor() {
        this.taskService = new TaskService();
        this.getTasks = this.getTasks.bind(this);

    }

    async getTasks(req: Request, res: Response) {
        const tasks = await this.taskService.getTasks();
        res.send(tasks);
    }
}