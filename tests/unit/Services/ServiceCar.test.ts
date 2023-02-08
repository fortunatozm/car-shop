import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import ServiceCar from '../../../src/Services/ServiceCar';

describe('Testes da camada service [car]', function () {
  it('Cadastro com sucesso', async function () {
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
    sinon.stub(Model, 'findOne').resolves(outPut);

    const service = new ServiceCar();
    const result = await service.inserCar(carInput);

    expect(result).to.be.deep.equal(outPut);
  });

  it('Listar todos carros com sucesso', async function () {
    const outputs: ICar[] = [
      {
        id: '6348513f34c397abcad040b2',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63dd9b2cc6b01259ef8755b3',
        model: 'Ford Ka',
        year: 2019,
        color: 'Red',
        status: true,
        buyValue: 75.000,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];
  
    sinon.stub(Model, 'find').resolves(outputs);
  
    const service = new ServiceCar();
    const result = await service.getAll();
  
    expect(result).to.be.deep.equal(outputs);
  });

  // it('Listar um carro específico com sucesso', async function () {
  //   const output: ICar = {
  //     id: '6348513f34c397abcad040b2',
  //     model: 'Marea',
  //     year: 2002,
  //     color: 'Black',
  //     status: true,
  //     buyValue: 15.990,
  //     doorsQty: 4,
  //     seatsQty: 5,
  //   };

  //   sinon.stub(Model, 'findById').resolves(output);
  
  //   const service = new ServiceCar();
  //   const result = await service.getOne('6348513f34c397abcad040b2');
  
  //   expect(result).to.be.deep.equal(output);
  // });
  
  afterEach(function () {
    sinon.restore();
  });
});
