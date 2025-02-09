import { Request, Response } from 'express';
import { GroupService } from '../service/group.service';

export class GroupController {
    groupService: GroupService;

    constructor() {
        this.groupService = new GroupService();
        this.getGroups = this.getGroups.bind(this)
    }

    async getGroups(req: Request, res: Response) {
        const groups = await this.groupService.getGroups();
        res.send(groups);
        
    }
}