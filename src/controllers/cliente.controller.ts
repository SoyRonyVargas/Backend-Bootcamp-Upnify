
import { Cliente } from "../models/Cliente";
import { Controller } from "../types";

export const getClientesCtrl : Controller = async (req, res) => {

    try {

        debugger
        
        const clientes = await Cliente.findAll()
        // const clientes = await sequelize.query(`
        //     SELECT * 
        //     FROM clientes
        // `)

        return res.status(200).json({
            data: clientes,
            ok: true
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        })
    }

}