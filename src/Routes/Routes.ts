import { Router } from 'express';
import ControllerCar from '../Controllers/ControllerCar';

const routes = Router();

routes.post('/cars', (req, res, next) => new ControllerCar(req, res, next).create());
routes.get('/cars', (req, res, next) => new ControllerCar(req, res, next).getAll());
routes.get('/cars/:id', (req, res, next) => new ControllerCar(req, res, next).getOne());

export default routes;