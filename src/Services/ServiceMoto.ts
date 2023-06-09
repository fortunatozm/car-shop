import ModelMoto from '../Models/ModelMoto';
import IMotorcycle from '../Interfaces/IMotorcycle';
import DominioMoto from '../Domains/Motorcycle';

export default class ServiceMoto {
  private createMotoDominio(moto: IMotorcycle | null): DominioMoto | null {
    if (moto) {
      return new DominioMoto(moto);
    }
    return null;
  }

  public async inserMoto(moto: IMotorcycle) {
    const modelMoto = new ModelMoto();
    const newMoto = await modelMoto.create(moto);
    return (newMoto.id, this.createMotoDominio(newMoto));
  }

  public async getAll() {
    const modelMoto = new ModelMoto();
    const motors = await modelMoto.getAll();
    // console.log('Service Requisição', motors);
    const motorsOrg = motors.map((motor) => ({
      id: motor.id,
      model: motor.model,
      year: motor.year,
      color: motor.color,
      status: motor.status,
      buyValue: motor.buyValue,
      category: motor.category,
      engineCapacity: motor.engineCapacity,
    }));
    // console.log('Result Service', motorsOrg);
    return motorsOrg;
  }

  public async getOne(id: string) {
    const modelMoto = new ModelMoto();
    const moto = await modelMoto.getOne(id);
    if (moto) {      
      const motoOrg = {
        id: moto._id,
        model: moto.model,
        year: moto.year,
        color: moto.color,
        status: moto.status,
        buyValue: moto.buyValue,
        category: moto.category,
        engineCapacity: moto.engineCapacity,
      };
      return motoOrg;
    }
    return moto;
  }

  public async updateOne(id: string, moto: IMotorcycle) {
    const modelMoto = new ModelMoto();
    const updateMoto = await modelMoto.update(id, moto);
    return this.createMotoDominio(updateMoto);
  }
}