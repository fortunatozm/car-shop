import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(dados: IVehicle) {
    this.id = dados.id;
    this.model = dados.model;
    this.year = dados.year;
    this.color = dados.color;
    this.status = dados.status;
    this.buyValue = dados.buyValue;
  }
}