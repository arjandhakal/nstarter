import jwt from 'jsonwebtoken';

import { JWT_PRIVATE_KEY, JWT_PUBLIC_KEY } from '../../helpers/constants';

class Jwt {
  protected privateKey: string;

  protected publicKey: string;

  constructor() {
    this.privateKey = JWT_PRIVATE_KEY;
    this.publicKey = JWT_PUBLIC_KEY;
  }

  signJwt(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, this.privateKey, options);
  }

  verifyJwt(token: string) {
    try {
      const decoded = jwt.verify(token, this.publicKey);
      return {
        valid: true,
        expired: false,
        decoded
      };
    } catch (e: any) {
      return {
        valid: false,
        expired: e.message === 'TokenExpiredError',
        decoded: null
      };
    }
  }
}

export default new Jwt();
