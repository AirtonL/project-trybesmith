import { Request, Response, NextFunction } from 'express';

import LoginService from '../../services/login/login.service';

class LoginController {
  constructor(public loginService = new LoginService()) {}

  public auth = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    try {
      const { message, token } = await this.loginService.auth({ username, password });

      if (message) return res.status(401).json({ message });

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default LoginController;
