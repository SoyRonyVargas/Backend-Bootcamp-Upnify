import { sequelize } from "../database";
import { DataTypes, Sequelize } from "sequelize";

const Carrera = sequelize.define(
  "Carrera",
  {
    UNCR_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UNCR_CARRERA: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    UNCR_DESCRIPICION: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
  },
  {
    tableName: "tbl_carrera",
    modelName: "Carrera",
  }
);

export default Carrera;
