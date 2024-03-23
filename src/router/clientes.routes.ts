import { getClientesCtrl } from '../controllers/cliente.controller';
import { Router } from 'express';

const router = Router();

router.get('/all',getClientesCtrl);

export default router;
