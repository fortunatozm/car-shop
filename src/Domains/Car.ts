import Icar from '../Interfaces/ICar';

export default class Car {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(dados: Icar) {
    this.id = dados.id;
    this.model = dados.model;
    this.year = dados.year;
    this.color = dados.color;
    this.status = dados.status;
    this.buyValue = dados.buyValue;
    this.doorsQty = dados.doorsQty;
    this.seatsQty = dados.seatsQty;
  }
}