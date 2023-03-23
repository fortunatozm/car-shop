import { Schema } from 'mongoose';
import Icar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class ModelCar extends AbstractODM<Icar> {
  constructor() {
    const schema = new Schema({
      model: { type: String },
      year: { type: Number },
      color: { type: String },
      status: { type: Boolean, default: false },
      buyValue: { type: Number },
      doorsQty: { type: Number },
      seatsQty: { type: Number },
    });
    super(schema, 'Cars');
  }
}