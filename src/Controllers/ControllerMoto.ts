import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import ServiceMoto from '../Services/ServiceMoto';
import IMotorcycle from '../Interfaces/IMotorcycle';

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

  public async create() {
    const car: IMotorcycle = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status || false,
      buyValue: this._req.body.buyValue,
      category: this._req.body.category,
      engineCapacity: this._req.body.engineCapacity,
    };

    try {
      const newMoto = await this.service.inserMoto(car);
      return this._res.status(201).json(newMoto);
    } catch (error) {
      this._next(error);
    }
  }

  public async getAll() {
    try {
      const motors = await this.service.getAll();
      return this._res.status(200).json(motors);
    } catch (error) {
      this._next(error);
    }
  }

  private validateId() {
    const { id } = this._req.params;
    if (!isValidObjectId(id)) {
      return this._res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
  
  public async getOne() {
    const { id } = this._req.params;
    this.validateId();

    try {
      const moto = await this.service.getOne(id);
      if (!moto) {
        return this._res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this._res.status(200).json(moto);
    } catch (error) {
      return this._next(error);
    }
  }

  public async updateOne() {
    const { id } = this._req.params;
    this.validateId();

    const car: IMotorcycle = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status || false,
      buyValue: this._req.body.buyValue,
      category: this._req.body.category,
      engineCapacity: this._req.body.engineCapacity,
    };
    
    try {
      const serviceUp = await this.service.updateOne(id, car);
      if (!serviceUp) {
        return this._res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this._res.status(200).json(serviceUp);
    } catch (error) {
      return this._next(error);
    }
  }
}