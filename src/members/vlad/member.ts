import { Task } from '../../types/task';
import type { Member } from '../../types/member';

const MEMBER: Member = {
	name: 'Vlad',
	distinction: 'Senior',
	completed_tasks: [Task.SNAKE, Task.TETRIS, Task.CONNECT_FOUR]
};

export default MEMBER;
