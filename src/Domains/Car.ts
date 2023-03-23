import Icar from '../Interfaces/ICar';
// import IVehicle from '../Interfaces/IVehicle';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  // protected id?: string;
  // protected model: string;
  // protected year: number;
  // protected color: string;
  // protected status?: boolean;
  // protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(dados: Icar) {
    super(dados);
    // this.id = dados.id;
    // this.model = dados.model;
    // this.year = dados.year;
    // this.color = dados.color;
    // this.status = dados.status;
    // this.buyValue = dados.buyValue;
    this.doorsQty = dados.doorsQty;
    this.seatsQty = dados.seatsQty;
  }
}