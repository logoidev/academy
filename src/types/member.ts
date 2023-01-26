import type { Task } from './task';

export type MemberDistinction = 'Senior' | 'Junior';

export interface Member {
	name: string;
	distinction: MemberDistinction;
	completed_tasks: Array<Task>;
}
