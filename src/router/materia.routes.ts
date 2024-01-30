import { Router, Request, Response } from 'express';
import Materia from '../models/materia';

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    try 
    {
        
        // const [results, metadata] = await sequelize.query(`
        //     SELECT *
        //     FROM tbl_materia
        // `);
        
        const materias = await Materia.findAll()

        return res.json(materias)

    } catch (err) {
        console.log(err)
        return res.json({
            err
        });
    }
});

export default router;
