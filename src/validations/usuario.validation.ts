import { body } from 'express-validator'

export const validations = {
  create: [
    body('NOMBRE').isString().withMessage('El campo NOMBRE debe ser una cadena de texto.'),
    body('APELLIDOS').isString().withMessage('El campo APELLIDOS debe ser una cadena de texto.'),
    body('CONTRASENIA').isString().withMessage('El campo CONTRASENIA debe ser una cadena de texto.'),
    body('CORREO').isEmail().not().isEmpty().withMessage('El campo CORREO debe ser una dirección de correo electrónico válida y no puede estar vacío.')
  ],
}