import { actualizarUsuarioCtrl, createUsuarioCtrl, eliminarUsuarioCtrl, getUsuariosCtrl } from '../controllers/usuario.controller';
import { Router } from 'express';
import { handleValidationErrors } from '../middlewares/validate.middleware';
import { actualizarProveedorCtrl, createProveedorCtrl, eliminarProveedorCtrl, getProveedoresCtrl } from '../controllers/proveedores.controller';
import { validations } from '../validations/proveedor.validations';

const router = Router();

router.get('/all',getProveedoresCtrl);

router.post(
    '/create',
    validations.create,
    // validations.create,
    // handleValidationErrors,
    createProveedorCtrl
);

router.put(
    '/edit',
    validations.edit,
    handleValidationErrors,
    actualizarProveedorCtrl
);

router.delete(
    '/:IDPROVEEDOR',
    validations.delete,
    handleValidationErrors,    
    eliminarProveedorCtrl
);

export default router;
