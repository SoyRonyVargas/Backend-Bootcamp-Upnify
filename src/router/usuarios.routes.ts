import { createUsuarioCtrl, getUsuariosCtrl } from '../controllers/usuario.controller';
import { Router } from 'express';
import { handleValidationErrors } from '../middlewares/validate.middleware';
import { validations } from '../validations/usuario.validation';

const router = Router();

router.get('/all',getUsuariosCtrl);

router.get(
    '/create',
    validations.create,
    handleValidationErrors,
    createUsuarioCtrl
);

export default router;
