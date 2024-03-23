import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'BOOTCAMP2024',
  'bootcamp',
  'Bootcamp2024',
  {
    host: 'develop.salesup.com.mx',
    dialect: 'mssql',
    port: 1433,
    dialectOptions: {
        options: {
          encrypt: false,
          trustServerCertificate: true
        },
      },
  }
)