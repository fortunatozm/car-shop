import { Router } from 'express';
import ControllerCar from '../Controllers/ControllerCar';
import ControllerMoto from '../Controllers/ControllerMoto';

const routes = Router();

routes.post('/cars', (req, res, next) => new ControllerCar(req, res, next).create());
routes.get('/cars', (req, res, next) => new ControllerCar(req, res, next).getAll());
routes.get('/cars/:id', (req, res, next) => new ControllerCar(req, res, next).getOne());
routes.put('/cars/:id', (req, res, next) => new ControllerCar(req, res, next).updateOne());
routes.post('/motorcycles', (req, res, next) => new ControllerMoto(req, res, next).create());
routes.get('/motorcycles', (req, res, next) => new ControllerMoto(req, res, next).getAll());
routes.get('/motorcycles/:id', (req, res, next) => new ControllerMoto(req, res, next).getOne());
routes.put('/motorcycles/:id', (req, res, next) => new ControllerMoto(req, res, next).updateOne());

export default routes;