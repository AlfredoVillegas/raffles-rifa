import * as bcrypt from 'bcrypt';

export async function encryptPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  return passwordHash;
}

export async function verifyPassword(password: string, passwordHash: string): Promise<boolean> {
  const passwordIsValid = await bcrypt.compare(password, passwordHash);
  return passwordIsValid;
}
