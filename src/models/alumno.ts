import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const Alumno = sequelize.define('Alumno', {
    // Model attributes are defined here
    UNAL_NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UNAL_APELLIDO: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    tableName: 'Alumnos',
    modelName: 'Alumno' // We need to choose the model name
  });
  (async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();
export default Alumno