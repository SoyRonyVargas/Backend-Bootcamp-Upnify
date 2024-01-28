import express, { Application } from 'express';
import Alumno from './models/alumno';
import { sequelize } from './database';
import Carrera from './models/carrera';
import Materia from './models/materia';
import Calificaciones from './models/calificaciones';
import alumnosRouter from './router/alumnos.routes'

const app: Application = express();
const port = process.env.PORT || 8000;

// app.get('/', async (req: Request, res: Response) => {

//   res.json({
//     msg: 'servidor corriendo',
//     // data: rows
//   });

// });

// app.post('/', (req: Request, res: Response) => {
//   res.json({
//     msg: 'corriendo en metodo POST'
//   });
// });

// app.get('/peticiones', (req: Request, res: Response) => {
//   const endpoints = [
//     { endpoint: '/', description: 'Devuelve un mensaje indicando que el servidor está corriendo.' },
//     { endpoint: '/alumno', description: 'Devuelve los datos del primer alumno.' },
//     { endpoint: '/alumnos', description: 'Devuelve un listado de todos los alumnos.' },
//     { endpoint: '/peticiones', description: 'Devuelve un listado de los otros endpoints y sus descripciones.' }
//   ];

//   res.json({
//     endpoints
//   });
// });

app.use("/alumnos", alumnosRouter)

const getConnection = async () => {
  
  try {

    await sequelize.authenticate();

    console.log('Connection has been established successfully.');
    
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

    await sequelize.sync();
    
    await Alumno.sync();
    await Carrera.sync();
    await Materia.sync();
    await Calificaciones.sync();

    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    console.log("Modelos actualizados");

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

app.listen(port, async () => {
  
  await getConnection()
  
  console.log(`Server is Fire at http://localhost:${port}`);
  
});