import { handleValidationErrors } from '../middlewares/validate.middleware';
import { AuthLoginCtrl } from '../controllers/auth.controller';
import { validations } from '../validations/auth.validations';
import { Router } from 'express';

const router = Router();

router.post(
    '/login',
    validations.login,
    handleValidationErrors,
    AuthLoginCtrl
);

export default router;
