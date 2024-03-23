// import { Router, Request, Response } from 'express';
// import { sequelize } from '../database';
// import { CreateStudent, EditStudent, RemoveStudent } from '../controllers/alumno.controller';
// const router = Router();

// router.get('/all', async (req: Request, res: Response) => {
//     try {
//         const [results, metadata] = await sequelize.query(`
//             SELECT 
//                 tbl_alumno.UNAL_ID, 
//                 tbl_alumno.UNAL_NOMBRE, 
//                 tbl_alumno.UNAL_APELLIDO, 
//                 TC.UNCR_CARRERA, 
//                 TCalf.UNCL_CAL as Calificacion, 
//                 tbl_materia.UNMA_MATERIA as Materia, 
//                 tbl_materia.UNMA_CUATRIMESTRE as Cuatrimestre 
//             FROM 
//                 tbl_alumno 
//                 INNER JOIN tbl_carrera TC ON tbl_alumno.UNAL_UNCR_ID = TC.UNCR_ID 
//                 INNER JOIN tbl_calificaciones TCalf ON tbl_alumno.UNAL_UNCR_ID = TCalf.UNCL_UNAL_ID 
//                 INNER JOIN tbl_materia ON tbl_materia.UNMA_ID = TCalf.UNCL_UNMA_ID;
//         `);
        
//         console.log(results);

//         return res.json(results)

//     } catch (err) {
//         console.log(err)
//         return res.json({
//             err
//         });
//     }
// });

// router.post("/create", CreateStudent )
// router.delete("/:id", RemoveStudent )
// router.put("/update", EditStudent )

// router.get('/peticiones', (req: Request, res: Response) => {
  
//     const endpoints = [
//     { endpoint: '/', description: 'Devuelve un mensaje indicando que el servidor está corriendo.' },
//     { endpoint: '/alumno', description: 'Devuelve los datos del primer alumno.' },
//     { endpoint: '/alumnos', description: 'Devuelve un listado de todos los alumnos.' },
//     { endpoint: '/peticiones', description: 'Devuelve un listado de los otros endpoints y sus descripciones.' }
//   ];

//   res.json({
//     endpoints
//   });
  
// });

// export default router;
