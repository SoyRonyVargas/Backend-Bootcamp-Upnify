import { body, param } from 'express-validator';

export const validations = {
  create: [
    body('CATEGORIA').isString().withMessage('El campo CATEGORIA debe ser una cadena de texto.'),
  ],
  edit: [
    body('IDCATEGORIA').isNumeric().withMessage('El campo IDCATEGORIA debe ser un número válido.'),
    body('CATEGORIA').isString().withMessage('El campo CATEGORIA debe ser una cadena de texto.'),
  ],
  delete: [
    param('IDCATEGORIA').isNumeric().notEmpty().withMessage('El campo IDCATEGORIA debe ser un número válido.')
  ]
};
