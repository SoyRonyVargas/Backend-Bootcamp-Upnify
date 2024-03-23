import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Categoria } from '../models/Categoria';
import { Controller } from '../types';

// Tipos para la creación y edición de una categoría
type CreateCategoriaDTO = {
    CATEGORIA: string;
};

type EditCategoriaDTO = {
    IDCATEGORIA: string;
    CATEGORIA: string;
};

// Controlador para obtener todas las categorías
export const getCategoriasCtrl: Controller = async (req: Request, res: Response) => {
    try {
        const categorias = await Categoria.findAll();
        return res.status(200).json({
            data: categorias,
            ok: true
        });
    } catch (error) {
        console.error('Error al obtener las categorías:', error);
        return res.status(500).json({ ok: false });
    }
};

// Controlador para crear una nueva categoría
export const createCategoriaCtrl: Controller<any, CreateCategoriaDTO> = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const categoriaExistente = await Categoria.findOne({
            where: { CATEGORIA: payload.CATEGORIA }
        });
        if (categoriaExistente) {
            return res.status(401).json({
                ok: false,
                msg: "La categoría ya existe"
            });
        }

        const categoriaCreada = await Categoria.create({
            CATEGORIA: payload.CATEGORIA,
            FECHAHORA: Sequelize.literal('CURRENT_TIMESTAMP') as any
        });

        return res.status(200).json({
            data: categoriaCreada,
            ok: true
        });
    } catch (error) {
        console.error('Error al crear la categoría:', error);
        return res.status(400).json({ ok: false });
    }
};

// Controlador para editar una categoría
export const actualizarCategoriaCtrl: Controller<any, EditCategoriaDTO> = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const categoriaExistente = await Categoria.findByPk(payload.IDCATEGORIA);
        if (!categoriaExistente) {
            return res.status(401).json({
                ok: false,
                msg: "Categoría inválida"
            });
        }

        await categoriaExistente.update({
            CATEGORIA: payload.CATEGORIA // Aquí puedes incluir más campos para actualizar si es necesario
        });

        return res.status(200).json({
            data: categoriaExistente,
            ok: true
        });
    } catch (error) {
        console.error('Error al actualizar la categoría:', error);
        return res.status(400).json({ ok: false });
    }
};

// Controlador para eliminar una categoría
export const eliminarCategoriaCtrl: Controller<any, null, { IDCATEGORIA: string }> = async (req: Request, res: Response) => {
    try {
        const { IDCATEGORIA } = req.params;
        const categoriaExistente = await Categoria.findByPk(IDCATEGORIA);
        if (!categoriaExistente) {
            return res.status(401).json({
                ok: false,
                msg: "Categoría inválida"
            });
        }

        await categoriaExistente.destroy();
        return res.status(200).json({
            data: categoriaExistente,
            ok: true,
            msg: "Categoría eliminada correctamente"
        });
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
        return res.status(400).json({ ok: false });
    }
};
