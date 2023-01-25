import type { User } from './user';

export interface Student extends User {
	type?: 'student';
}
