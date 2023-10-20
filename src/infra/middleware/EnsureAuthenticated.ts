// auth.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import authConfig from '../../config/auth';
import { Request, Response } from 'express';

interface IPayload {
  sub: string;
}

interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: AuthRequest, res: Response, next: () => void) {
    const authHeader =
      req.headers['authorization'] || req.headers['Authorization'];

    if (!authHeader) {
      return res.status(400).json({
        error: true,
        status: 400,
        data: [],
        message: 'Token is missing!',
      });
    }

    const [, token] = Array.isArray(authHeader)
      ? authHeader[0].split(' ')
      : authHeader.split(' ');

    if (!token) {
      return res.status(400).json({
        error: true,
        status: 400,
        data: [],
        message: 'Invalid token!',
      });
    }

    try {
      const { sub: userId } = verify(
        token,
        authConfig.secret_token,
      ) as IPayload;

      req.user = {
        id: userId,
      };

      next();
    } catch (error) {
      return res.status(400).json({
        error: true,
        status: 400,
        data: [],
        message: 'Invalid token!',
      });
    }
  }
}
