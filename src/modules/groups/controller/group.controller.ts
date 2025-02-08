import { Request, Response } from 'express';
import { GroupService } from '../service/group.service';

export class GroupController {
    groupService: GroupService;

    constructor() {
        this.groupService = new GroupService();
        this.getGroups = this.getGroups.bind(this)
    }

    getGroups(req: Request, res: Response) {
        try {
            res.send(this.groupService.getGroups());
        } catch(error) {
            throw new Error('Erro ao listar os grupos:');
        }
    }
}