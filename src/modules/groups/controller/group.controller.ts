import { Request, Response } from 'express';
import { GroupService } from '../service/group.service';

export class GroupController {
    groupService: GroupService;

    constructor() {
        this.groupService = new GroupService();
        this.getGroups = this.getGroups.bind(this)
    }

    getGroups(req: Request, res: Response) {
        res.send(this.groupService.getGroups());

    }
}