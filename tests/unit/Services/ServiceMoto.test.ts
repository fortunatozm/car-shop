import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import ServiceCar from '../../../src/Services/ServiceCar';

describe('Testes que cubram 30% da camada service', function () {
  it('Retorna todos dados com sucesso', async function name() {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    
    const outPut: Car = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(outPut);

    const service = new ServiceCar();
    const result = await service.inserCar(carInput);

    expect(result).to.be.deep.equal(outPut);
  });
});