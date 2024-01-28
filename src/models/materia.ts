import { sequelize } from "../database";
import { DataTypes } from "sequelize";

const Materia = sequelize.define(
  "Materia",
  {
    UNMA_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    UNMA_MATERIA: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    UNMA_CUATRIMESTRE: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "tbl_materia",
    modelName: "Materia",
  }
);

export default Materia;
