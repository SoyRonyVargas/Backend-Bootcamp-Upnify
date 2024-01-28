import { sequelize } from "../database";
import { DataTypes } from "sequelize";
import Materia from "./materia";
import Alumno from "./alumno";

const Calificaciones = sequelize.define(
    "Calificaciones",
    {
        UNCL_ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        UNCL_CAL: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        UNCL_UNMA_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                // This is a reference to another model
                model: Materia,
                // This is the column name of the referenced model
                key: 'UNMA_ID',
            }
        },
        UNCL_UNAL_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                // This is a reference to another model
                model: Alumno,
                // This is the column name of the referenced model
                key: 'UNAL_ID',
            }
        },
    },
    {
        tableName: "tbl_calificaciones",
        modelName: "Calificaciones",
    }
);

export default Calificaciones;
