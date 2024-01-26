import express, { Request, Response , Application } from 'express';
import { getConnection } from './database';

const app: Application = express();
const port = process.env.PORT || 8000;



const data = [
  {
    "nombre": "Rony",
    "apellido": "Vargas",
    "matricula": "202200505",
    "carrera": "ingenieria en software"
  },
  {
    "nombre": "Laura",
    "apellido": "Gómez",
    "matricula": "202200512",
    "carrera": "ciencias de la computación"
  },
  {
    "nombre": "Carlos",
    "apellido": "Martínez",
    "matricula": "202200518",
    "carrera": "ingeniería electrónica"
  },
  {
    "nombre": "Ana",
    "apellido": "López",
    "matricula": "202200525",
    "carrera": "ingeniería industrial"
  },
  {
    "nombre": "David",
    "apellido": "García",
    "matricula": "202200531",
    "carrera": "matemáticas aplicadas"
  }
]

app.get('/', async (req: Request, res: Response) => {

  // const [rows, fields] = await pool.query('SELECT * FROM `tabla`');

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

app.get('/alumno', (req: Request, res: Response) => {
  res.json(data[0]);
});
app.get('/alumnos', (req: Request, res: Response) => {
  res.json(data);
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