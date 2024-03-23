import { sequelize } from '.'

export const getConnection = async () => {
  
    try {
  
      await sequelize.authenticate();
  
    //   await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  
      await sequelize.sync();
      
    //   await Alumno.sync();
    //   await Carrera.sync();
    //   await Materia.sync();
    //   await Calificaciones.sync();
  
    //   await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
      
      console.clear()
  
      console.log("Base de datos conectada");
  
    } 
    catch (error) 
    {
      console.error('Unable to connect to the database:', error);
    }
  
  }