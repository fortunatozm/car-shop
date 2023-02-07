import { Model, Schema, model, models, UpdateQuery } from 'mongoose';
// import IVehicle from '../Interfaces/IVehicle';

export default abstract class AbstractODM<T> {
  protected _schema: Schema;
  protected _model: Model<T>;
  protected _modelName: string;
  constructor(schema: Schema, modelName: string) {
    this._modelName = modelName;
    this._schema = schema;
    this._model = models[this._modelName] || model(this._modelName, this._schema);
  }

  public async create(car: T): Promise<T> {
    return this._model.create({ ...car });
  }
  public async getAll() {
    return this._model.find();
  }
  
  public async getOne(id: string) {
    return this._model.findById(id);
  }
  
  public async update(id: string, car: T) {
    const data = await this._model.findOneAndUpdate(
      { _id: id },
      { ...car } as UpdateQuery<T>,
      { new: true },
    );
    return data;
  }
}