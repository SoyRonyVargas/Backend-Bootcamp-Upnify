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