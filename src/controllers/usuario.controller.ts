import Usuario from "../models/usuario.model";
import { Controller } from "../types";

export const getUsuariosCtrl : Controller = async (req, res) => {

    try {
        
        const usuarios = await Usuario.findAll()
        // const usuarios = await sequelize.query(`
        //     SELECT * 
        //     FROM USUARIOS
        // `)

        return res.status(200).json({
            data: usuarios,
            ok: true
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        })
    }

}

type CreateUsuarioDTO = {
    CONTRASENIA: string
    APELLIDOS: string
    CORREO: string
    NOMBRE: String
}
export const createUsuarioCtrl : Controller<any, CreateUsuarioDTO> = async (req, res) => {

    try {
        
        const payload = req.body
        
        const usuarioExistente = await Usuario.findOne({
            where: {
               CORREO: payload.CORREO 
            }
        })

        if( usuarioExistente ) return res.status(401).json({
            ok: false,
            msg: "Usuario ya registrado"
        })

        const usuarioCreado = await Usuario.create({
            IDUSUARIO: 2,
            ...payload
        })
        

        return res.status(200).json({
            data: usuarioCreado,
            ok: true
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        })
    }

}