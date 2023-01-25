import { Task } from './tasks';

export interface Student {
	name: string;
	completed_tasks: Array<Task>;
}

export const STUDENTS: Array<Student> = [
	{
		name: 'Vlad',
		completed_tasks: [Task.SNAKE, Task.TETRIS]
	},
	{
		name: 'Andrew',
		completed_tasks: [Task.SNAKE]
	}
];
