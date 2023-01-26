import { Task } from '../../types/task';
import type { Member } from '../../types/member';

const MEMBER: Member = {
	name: 'Vlad',
	distinction: 'Senior',
	completed_tasks: [Task.SNAKE, Task.TETRIS]
};

export default MEMBER;
