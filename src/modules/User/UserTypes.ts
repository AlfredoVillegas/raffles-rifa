export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export type userResponse = Omit<User, 'password'>;

export type newUser = Omit<User, 'id'>;

export interface authUser {
  email: string;
  password: string;
}
