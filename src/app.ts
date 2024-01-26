import express, { Request, Response , Application } from 'express';
import { getConnection, pool } from './database';
import Alumno from './models/alumno';

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', async (req: Request, res: Response) => {

  res.json({
    msg: 'servidor corriendo',
    // data: rows
  });

});

app.post('/', (req: Request, res: Response) => {
  res.json({
    msg: 'corriendo en metodo POST'
  });
});

app.post('/alumno', async (req: Request, res: Response) => {
  
  try
  {
    const jane = Alumno.build({ UNAL_NOMBRE: "Jane" , UNAL_APELLIDO: 'test' });

    await jane.save()

    console.log(jane);

    res.json(jane.toJSON())

  }
  catch(err)
  {
    res.json({
      err
    })
  }
  
});
app.get('/alumnos', (req: Request, res: Response) => {
  res.json([]);
});

app.get('/peticiones', (req: Request, res: Response) => {
  const endpoints = [
    { endpoint: '/', description: 'Devuelve un mensaje indicando que el servidor está corriendo.' },
    { endpoint: '/alumno', description: 'Devuelve los datos del primer alumno.' },
    { endpoint: '/alumnos', description: 'Devuelve un listado de todos los alumnos.' },
    { endpoint: '/peticiones', description: 'Devuelve un listado de los otros endpoints y sus descripciones.' }
  ];

  res.json({
    endpoints
  });
});


app.listen(port, async () => {
  
  await getConnection()
  
  console.log(`Server is Fire at http://localhost:${port}`);
  
});