import { AppDataSource } from '../../database/TypeOrmClient';
import { encryptPassword, verifyPassword } from './passwordEncoderServices';
import { User } from './UserModel';
import { authUser, newUser, userResponse } from './UserTypes';

const repository = AppDataSource.getRepository(User);

export async function registerUser(newUser: newUser): Promise<userResponse> {
  const passwordHash = await encryptPassword(newUser.password);
  const user = new User(newUser.name, newUser.phone, newUser.email, passwordHash);

  const userFromDb = await repository.save(user);

  return userFromDb.toResponseSecure();
}

export async function loginUser(authUser: authUser): Promise<userResponse> {
  const userFromDb = await repository.findOneBy({ email: authUser.email });
  if (!userFromDb) throw new Error('User not registered');

  const authUserIsValid = await verifyPassword(authUser.password, userFromDb.password);
  if (!authUserIsValid) throw new Error('email or password invalid');

  return userFromDb.toResponseSecure();
}

export async function getUser(id: number): Promise<userResponse> {
  const user = await repository.findOneBy({ id });
  if (!user) throw new Error('User not exist');

  return user.toResponseSecure();
}
