import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMoto from '../../../src/Interfaces/IMotorcycle';
import Moto from '../../../src/Domains/Motorcycle';
import ServiceMoto from '../../../src/Services/ServiceMoto';

describe('Testes da camada service [Motorcycle]', function () {
  it('Cria todos dados com sucesso [Motorcycle]', async function () {
    const motoInput: IMoto = {
      model: 'Honda Cb 600f Hornet3',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    
    const motoOutPut: Moto = new Moto({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet3',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'create').resolves(motoOutPut);
    sinon.stub(Model, 'findOne').resolves(motoOutPut);

    const service = new ServiceMoto();
    const result = await service.inserMoto(motoInput);

    expect(result).to.be.deep.equal(motoOutPut);
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Listar todas motos com sucesso', async function () {
    const motoOutPut: IMoto[] = [
      {
        id: '6348513f34c397abcad040b2',
        model: 'Honda Cb 600f Hornet2',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '63ddaebd40794723cfd7d257',
        model: 'Suzuki',
        year: 2019,
        color: 'Yellow',
        status: true,
        buyValue: 10.000,
        category: 'Street',
        engineCapacity: 300,
      },
    ];

    sinon.stub(Model, 'find').resolves(motoOutPut);

    const service = new ServiceMoto();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motoOutPut);
  });

  it('Listar uma moto específica com sucesso', async function () {
    const motoOutPut: IMoto = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    
    const motoInput = {
      _id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findById').resolves(motoInput);

    const service = new ServiceMoto();
    const result = await service.getOne('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(motoOutPut);
  });

  it('Retornar [Motorcycle not found] caso a moto não exista', async function () {
    sinon.stub(Model, 'findById').resolves(undefined);
    try {
      const service = new ServiceMoto();
      await service.getOne('63ddaebd40794723cfd7d257');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('Retornar [Invalid mongo id] caso o id seja invalido', async function () {
    sinon.stub(Model, 'findById').resolves(undefined);
    try {
      const service = new ServiceMoto();
      await service.getOne('22222222222222222');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  // afterEach(function () {
  //   sinon.restore();
  // });
});