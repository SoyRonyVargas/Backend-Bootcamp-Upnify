import {
  actualizarCategoriaCtrl,
  createCategoriaCtrl,
  eliminarCategoriaCtrl,
  getCategoriasCtrl,
} from "../controllers/categoria.controller";
import { Router } from "express";
import { validations } from "../validations/categoria.validations";
import { handleValidationErrors } from "../middlewares/validate.middleware";

const router = Router();

router.get(
    "/all", 
    getCategoriasCtrl
);
router.post(
    "/create", 
    validations.create,
    handleValidationErrors,
    createCategoriaCtrl
);
router.put(
    "/edit", 
    validations.edit,
    handleValidationErrors,
    actualizarCategoriaCtrl
);
router.delete(
    "/:IDCATEGORIA", 
    validations.delete,
    handleValidationErrors,
    eliminarCategoriaCtrl
);

export default router;
