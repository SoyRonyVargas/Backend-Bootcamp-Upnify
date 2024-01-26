import { DataTypes } from "sequelize";
import { sequelize } from "../database";

const Alumno = sequelize.define(
  "Alumno",
  {
    UNAL_NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UNAL_APELLIDO: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Alumno",
    modelName: "Alumno",
  }
);

export default Alumno;
