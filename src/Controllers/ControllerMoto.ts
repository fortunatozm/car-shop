import { Request, Response, NextFunction } from 'express';
import ServiceMoto from '../Services/ServiceMoto';

export default class ControllerMoto {
  private _res: Response;
  private _req: Request;
  private _next: NextFunction;
  private service: ServiceMoto;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this.service = new ServiceMoto();
  }
}