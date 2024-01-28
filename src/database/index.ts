import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('cliente_servidor', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  // sync: {
  //   force: true
  // }
});

