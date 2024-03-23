import { getUsuariosCtrl } from '../controllers/usuario.controller';
import { Router } from 'express';

const router = Router();

router.get('/all',getUsuariosCtrl);

export default router;
