import { body, param } from 'express-validator';

export const validations = {
  create: [
    body('NOMBRE').isString().withMessage('El campo NOMBRE debe ser una cadena de texto.'),
  ],
  edit: [
    body('IDPROVEEDOR').isNumeric().withMessage('El campo IDPROVEEDOR debe ser un número válido.'),
    body('NOMBRE').isString().withMessage('El campo NOMBRE debe ser una cadena de texto.'),
  ],
  delete: [
    param('IDPROVEEDOR').isNumeric().notEmpty().withMessage('El campo IDPROVEEDOR debe ser un número válido.')
  ]
};
