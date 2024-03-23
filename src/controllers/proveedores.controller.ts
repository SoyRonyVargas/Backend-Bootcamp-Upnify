import { Sequelize } from "sequelize";
import { Proveedore } from "../models/Proveedore";
import { Controller } from "../types";

type CreateProveedorDTO = {
    NOMBRE: string;
}

type EditProveedorDTO = {
    IDPROVEEDOR: string;
    NOMBRE: string;
}

// Controlador para obtener todos los proveedores
export const getProveedoresCtrl: Controller = async (req, res) => {
    try {
        const proveedores = await Proveedore.findAll();
        return res.status(200).json({
            data: proveedores,
            ok: true
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        });
    }
}

// Controlador para crear un proveedor
export const createProveedorCtrl: Controller<any, CreateProveedorDTO> = async (req, res) => {
    try {
        const payload = req.body;
        // const fechaHoraActual = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const proveedorExistente = await Proveedore.findOne({
            where: {
                NOMBRE: payload.NOMBRE,
            }
        });
        if (proveedorExistente) return res.status(401).json({
            ok: false,
            msg: "Proveedor ya registrado"
        });
        const proveedorCreado = await Proveedore.create({
            NOMBRE: payload.NOMBRE,
            FECHAHORA: Sequelize.literal('CURRENT_TIMESTAMP') as any
        });
        return res.status(200).json({
            data: proveedorCreado,
            ok: true
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        });
    }
}

// Controlador para editar un proveedor
export const actualizarProveedorCtrl: Controller<any, EditProveedorDTO> = async (req, res) => {
    try {
        
        const payload = req.body;
        
        const proveedorExistente = await Proveedore.findByPk(Number(payload.IDPROVEEDOR));

        if (!proveedorExistente) return res.status(401).json({
            ok: false,
            msg: "Proveedor inválido"
        });
        
        proveedorExistente.set({
            NOMBRE: payload.NOMBRE,
        });

        await proveedorExistente.save()
        
        return res.status(200).json({
            data: proveedorExistente,
            ok: true
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        });
    }
}

// Controlador para eliminar un proveedor
export const eliminarProveedorCtrl: Controller<any, null, { IDPROVEEDOR: string }> = async (req, res) => {
    try {
        const id = req.params.IDPROVEEDOR;
        if (!id) return res.status(401).json({
            ok: false,
            msg: "ID no proporcionado"
        });
        const proveedorExistente = await Proveedore.findByPk(id);
        if (!proveedorExistente) return res.status(401).json({
            ok: false,
            msg: "Proveedor inválido"
        });
        await proveedorExistente.destroy();
        return res.status(200).json({
            data: proveedorExistente,
            ok: true,
            msg: "Proveedor eliminado correctamente"
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        });
    }
}
