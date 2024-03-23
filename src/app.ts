import express, { Application } from 'express';
import dotenv from 'dotenv'

// DB
import { sequelize } from './database';

// MODELOS
import Calificaciones from './models/calificaciones';
import Carrera from './models/carrera';
import Materia from './models/materia';
import Alumno from './models/usuario.model';

// ROUTERS
import usuariosRouter from './router/usuarios.routes'
import materiaRouter from './router/materia.routes'
import { getConnection } from './database/getConnection';

const app: Application = express();
const port = process.env.PORT || 8000;

dotenv.config()

app.use("/usuarios", usuariosRouter)
app.use("/materia", materiaRouter)

app.listen(port, async () => {
  
  await getConnection()
  
  console.log(`Servidor corriendo en http://localhost:${port}`);
  
});