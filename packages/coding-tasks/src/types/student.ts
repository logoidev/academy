import type { Task } from './task';

export interface Student {
	name: string;
	completed_tasks: Array<Task>;
}
