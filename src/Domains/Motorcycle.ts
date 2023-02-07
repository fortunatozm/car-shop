import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(dados: IMotorcycle) {
    super(dados);
    this.category = dados.category;
    this.engineCapacity = dados.engineCapacity;
  }
}