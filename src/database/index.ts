import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize( 
  "cliente_servidor" || '', 
  process.env.DBUSER ?? 'root', 
  process.env.DBPASSWORD || '', 
  {
    host: process.env.DBHOST,
    dialect: 'mysql',
    port: 3306,
    // sync: {
    //   force: true
    // }
  }
);

