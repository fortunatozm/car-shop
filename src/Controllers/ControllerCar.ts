import { NextFunction, Response, Request } from 'express';
import { isValidObjectId } from 'mongoose'; 
import Icar from '../Interfaces/ICar';
import ServiceCar from '../Services/ServiceCar';

export default class ControllerCar {
  private _res: Response;
  private _req: Request;
  private _next: NextFunction;
  private service: ServiceCar;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this.service = new ServiceCar();
  }
  public async create() {
    const car: Icar = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status || false,
      buyValue: this._req.body.buyValue,
      doorsQty: this._req.body.doorsQty,
      seatsQty: this._req.body.seatsQty,
    };

    try {
      const newCar = await this.service.inserCar(car);
      return this._res.status(201).json(newCar);
    } catch (error) {
      this._next(error);
    }
  }

  public async getAll() {
    try {
      const cars = await this.service.getAll();
      return this._res.status(200).json(cars);
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
      const car = await this.service.getOne(id);
      if (!car) {
        return this._res.status(404).json({ message: 'Car not found' });
      }
      return this._res.status(200).json(car);
    } catch (error) {
      return this._next(error);
    }
  }

  public async updateOne() {
    const { id } = this._req.params;
    this.validateId();

    const car: Icar = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status || false,
      buyValue: this._req.body.buyValue,
      doorsQty: this._req.body.doorsQty,
      seatsQty: this._req.body.seatsQty,
    };
    
    try {
      const serviceUp = await this.service.updateOne(id, car);
      if (!serviceUp) {
        return this._res.status(404).json({ message: 'Car not found' });
      }
      return this._res.status(200).json(serviceUp);
    } catch (error) {
      return this._next(error);
    }
  }
}