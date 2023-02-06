import { Router } from 'express';
import ControllerCar from '../Controllers/ControllerCar';

const routes = Router();

routes.post('/cars', (req, res, next) => new ControllerCar(req, res, next).create());

export default routes;