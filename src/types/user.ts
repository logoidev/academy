import type { Task } from './task';

export interface User {
	name: string;
	completed_tasks: Array<Task>;
}
