import { sequelize } from "../database";
import { DataTypes, Sequelize } from "sequelize";
import Carrera from "./carrera";

const Usuario = sequelize.define(
  "Usuario",
  {
    IDUSUARIO: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(255), //  por default es VARCHAR(255)
      allowNull: false,
    },
    APELLIDOS: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    CORREO: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CONTRASENIA: {
      type: DataTypes.STRING(255), //  por default es VARCHAR(255)
      allowNull: false,
    },
  },
  {
    tableName: "Usuarios",
    modelName: "Usuario",
    timestamps: false // Desactiva las columnas de timestamp
  }
);

export default Usuario;
