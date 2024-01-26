import { Sequelize } from 'sequelize'
import mysql from 'mysql2/promise';
import Alumno from '../models/alumno'

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'prueba',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  // database: 'prueba',
  // username: 'root',
  // password: '',
  port: 3306,
  sync: {
    force: true
  }
});

export const getConnection = async () => {
  try {

    await sequelize.authenticate();

    // await sequelize.sync()
    console.log('Connection has been established successfully.');

    await sequelize.sync();

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}