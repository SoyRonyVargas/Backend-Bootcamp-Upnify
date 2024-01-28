import { sequelize } from "../database";
import { DataTypes, Sequelize } from "sequelize";
import Carrera from "./carrera";
// import Carrera from "./carrera";

const Alumno = sequelize.define(
  "Alumno",
  {
    UNAL_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    UNAL_NOMBRE: {
      type: DataTypes.STRING(255), //  por default es VARCHAR(255)
      allowNull: false,
    },
    UNAL_APELLIDO: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    UNAL_EDAD: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UNAL_EMAIL: {
      type: DataTypes.STRING(255), //  por default es VARCHAR(255)
      allowNull: false,
    },
    UNAL_ESTADO: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UNAL_UNCR_ID: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: Carrera,
        // This is the column name of the referenced model
        key: 'UNCR_ID',
      }
    },
  },
  {
    tableName: "tbl_alumno",
    modelName: "Alumno",
  }
);

export default Alumno;
