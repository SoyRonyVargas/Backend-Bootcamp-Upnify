import { actualizarClienteCtrl, createClienteCtrl, eliminarClienteCtrl, getClientesCtrl } from '../controllers/cliente.controller';
import { Router } from 'express';

const router = Router();

router.get('/all',getClientesCtrl);
router.post('/create',createClienteCtrl);
router.put('/edit',actualizarClienteCtrl);
router.delete('/:IDCLIENTE',eliminarClienteCtrl);

export default router;
