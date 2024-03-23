import { Usuario } from "../models/Usuario";
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
    NOMBRE: string
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
            CONTRASENIA: payload.CONTRASENIA,
            APELLIDOS: payload.APELLIDOS,
            CORREO: payload.CORREO,
            NOMBRE: payload.NOMBRE
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

type EditUsuarioDTO = {
    IDUSUARIO: string
    CONTRASENIA: string
    APELLIDOS: string
    CORREO: string
    NOMBRE: string
}

export const actualizarUsuarioCtrl : Controller<any, EditUsuarioDTO> = async (req, res) => {

    try {
        
        const payload = req.body
        
        const usuarioExistente = await Usuario.findOne({
            where: {
                IDUSUARIO: payload.IDUSUARIO  
            }
        })

        if( !usuarioExistente ) return res.status(401).json({
            ok: false,
            msg: "Usuario invalido"
        })

        const { IDUSUARIO , ...rest } = payload

        usuarioExistente.set({
            APELLIDOS: rest.APELLIDOS,
            CONTRASENIA: rest.CONTRASENIA,
            CORREO: rest.CORREO,
            NOMBRE: rest.NOMBRE
        })

        await usuarioExistente.save()

        return res.status(200).json({
            data: usuarioExistente,
            ok: true
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        })
    }

}

export const eliminarUsuarioCtrl : Controller<any, null, { IDUSUARIO: string }> = async (req, res) => {

    try {
        
        const id = req.params.IDUSUARIO
        
        if( !id ) return res.status(401).json({
            ok: false,
            msg: "ID no proporcionado"
        })

        const usuarioExistente = await Usuario.findOne({
            where: {
                IDUSUARIO: id
            }
        })

        if( !usuarioExistente ) return res.status(401).json({
            ok: false,
            msg: "Usuario invalido"
        })

        await usuarioExistente.destroy()

        return res.status(200).json({
            data: usuarioExistente,
            ok: true,
            msg: "Usuario eliminado correctamente"
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        })
    }

}