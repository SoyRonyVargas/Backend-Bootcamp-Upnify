import { Sequelize } from 'sequelize'
import mysql from 'mysql2/promise';
import Alumno from '../models/alumno';
import Carrera from '../models/carrera';
import Materia from '../models/materia';

// export const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'prueba',
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10,
//   idleTimeout: 60000,
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0,
// });

export const sequelize = new Sequelize('cliente_servidor', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  // sync: {
  //   force: true
  // }
});

