import { Request, Response, NextFunction } from 'express';

export default class MiddwareError {
  public static err(
    error: Error,
    _req: Request,
    _res: Response,
    _next: NextFunction,
  ) {
    _res.status(500).json({ message: error.message });
    _next();
  }
}