import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class ModelCar extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema({
      model: { type: String },
      year: { type: Number },
      color: { type: String },
      status: { type: Boolean, default: false },
      buyValue: { type: Number },
      category: { type: String },
      engineCapacity: { type: Number },
    });
    super(schema, 'motorcycles');
  }
}