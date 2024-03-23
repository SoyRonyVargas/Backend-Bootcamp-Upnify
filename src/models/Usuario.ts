import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsuarioAttributes {
  IDUSUARIO: number;
  NOMBRE?: string;
  APELLIDOS?: string;
  CORREO?: string;
  CONTRASENIA?: string;
}

export type UsuarioPk = "IDUSUARIO";
export type UsuarioId = Usuario[UsuarioPk];
export type UsuarioOptionalAttributes = "NOMBRE" | "APELLIDOS" | "CORREO" | "CONTRASENIA";
export type UsuarioCreationAttributes = Optional<UsuarioAttributes, UsuarioOptionalAttributes>;

export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  IDUSUARIO!: number;
  NOMBRE?: string;
  APELLIDOS?: string;
  CORREO?: string;
  CONTRASENIA?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Usuario {
    return Usuario.init({
    IDUSUARIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    APELLIDOS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CORREO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CONTRASENIA: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'USUARIOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__USUARIOS__98242AA90D1C7687",
        unique: true,
        fields: [
          { name: "IDUSUARIO" },
        ]
      },
    ]
  });
  }
}
