import { Model, Schema, model, models } from 'mongoose';
import Icar from '../Interfaces/ICar';

export default class ModelCar {
  private _schema: Schema;
  private _model: Model<Icar>;
  constructor() {
    this._schema = new Schema({
      model: { type: String },
      year: { type: Number },
      color: { type: String },
      status: { type: Boolean, default: false },
      buyValue: { type: Number },
      doorsQty: { type: Number },
      seatsQty: { type: Number },
    });
    this._model = models.DominioCar || model('Cars', this._schema);
  }

  public async create(car: Icar): Promise<Icar> {
    return this._model.create({ ...car });
  }
}