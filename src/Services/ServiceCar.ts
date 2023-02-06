import DominioCar from '../Domains/Car';
import Icar from '../Interfaces/ICar';
import ModelCar from '../Models/ModelCar';

export default class ServiceCar {
  private createCarDominio(car: Icar | null): DominioCar | null {
    if (car) {
      return new DominioCar({
        id: car.id,
        model: car.model,
        year: car.year,
        color: car.color,
        status: car.status,
        buyValue: car.buyValue,
        doorsQty: car.doorsQty,
        seatsQty: car.seatsQty,
      });
    }
    return null;
  }

  public async inserCar(car: Icar) {
    const modelCar = new ModelCar();
    const newCar = await modelCar.create(car);
    return (newCar.id, this.createCarDominio(newCar));
  }

  public async getAll() {
    const modelCar = new ModelCar();
    const cars = await modelCar.getAll();
    const carsOrg = cars.map((car) => ({
      id: car._id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    }));
    return carsOrg;
  }
  
  public async getOne(id: string) {
    const modelCar = new ModelCar();
    const car = await modelCar.getOne(id);
    return car;
  }
}