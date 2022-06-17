import { genSalt, hash, compareSync } from 'bcrypt';
import { SALT_ROUNDS } from '../helpers/constants/index';

class Hash {
  static saltRounds: number = SALT_ROUNDS;

  static async create(password: string): Promise<string> {
    const salt = await genSalt(Hash.saltRounds);
    return hash(password, salt);
  }

  static compare(compareText: string, hashText: string): boolean {
    return compareSync(compareText, hashText);
  }
}

export default new Hash();
