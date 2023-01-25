import type { User } from './user';

export interface Teacher extends User {
	type?: 'teacher';
}
