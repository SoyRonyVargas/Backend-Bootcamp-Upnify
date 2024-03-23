import { Sequelize } from "sequelize";
import { Cliente } from "../models/Cliente";
import { Controller } from "../types";

type CreateClienteDTO = {
    NOMBRE: string;
    APELLIDOS: string;
}

type EditClienteDTO = {
    IDCLIENTE: string;
    NOMBRE: string;
    APELLIDOS: string;
}

// Controlador para obtener todos los clientes
export const getClientesCtrl: Controller = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        return res.status(200).json({
            data: clientes,
            ok: true
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        });
    }
}

// Controlador para crear un cliente
export const createClienteCtrl: Controller<any, CreateClienteDTO> = async (req, res) => {
    try {
        const payload = req.body;
        const clienteExistente = await Cliente.findOne({
            where: {
                NOMBRE: payload.NOMBRE,
                APELLIDOS: payload.APELLIDOS
            }
        });
        if (clienteExistente) return res.status(401).json({
            ok: false,
            msg: "Cliente ya registrado"
        });

        const clienteCreado = await Cliente.create({
            NOMBRE: payload.NOMBRE,
            APELLIDOS: payload.APELLIDOS,
            FECHAHORA: Sequelize.literal('CURRENT_TIMESTAMP') as any
        });
        return res.status(200).json({
            data: clienteCreado,
            ok: true
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        });
    }
}

// Controlador para editar un cliente
export const actualizarClienteCtrl: Controller<any, EditClienteDTO> = async (req, res) => {
    try {
        const payload = req.body;
        const clienteExistente = await Cliente.findByPk(payload.IDCLIENTE);
        if (!clienteExistente) return res.status(401).json({
            ok: false,
            msg: "Cliente inválido"
        });
        clienteExistente.set({
            NOMBRE: payload.NOMBRE,
            APELLIDOS: payload.APELLIDOS,
        });
        await clienteExistente.save()
        return res.status(200).json({
            data: clienteExistente,
            ok: true
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        });
    }
}

// Controlador para eliminar un cliente
export const eliminarClienteCtrl: Controller<any, null, { IDCLIENTE: string }> = async (req, res) => {
    try {
        const id = req.params.IDCLIENTE;
        if (!id) return res.status(401).json({
            ok: false,
            msg: "ID no proporcionado"
        });
        const clienteExistente = await Cliente.findByPk(id);
        if (!clienteExistente) return res.status(401).json({
            ok: false,
            msg: "Cliente inválido"
        });
        await clienteExistente.destroy();
        return res.status(200).json({
            data: clienteExistente,
            ok: true,
            msg: "Cliente eliminado correctamente"
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        });
    }
}
