import IMotorcycle from '../Interfaces/IMotorcycle';
import IVehicle from '../Interfaces/IVehicle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  // protected id?: string;
  // protected model: string;
  // protected year: number;
  // protected color: string;
  // protected status?: boolean;
  // protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(dados: IMotorcycle) {
    super(dados);
    // this.id = dados.id;
    // this.model = dados.model;
    // this.year = dados.year;
    // this.color = dados.color;
    // this.status = dados.status;
    // this.buyValue = dados.buyValue;
    this.category = dados.category;
    this.engineCapacity = dados.engineCapacity;
  }
}