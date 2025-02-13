import { categoryrouter } from "../modules/categories/router/category.router";
import { groupRouter } from "../modules/groups/router/group.router";
import { taskRouter } from "../modules/tasks/router/task.router";


export const routers = [groupRouter, categoryrouter, taskRouter];