import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ClienteAttributes {
  IDCLIENTE: number;
  NOMBRE?: string;
  APELLIDOS?: string;
  FECHAHORA?: Date;
}

export type ClientePk = "IDCLIENTE";
export type ClienteId = Cliente[ClientePk];
export type ClienteOptionalAttributes = "IDCLIENTE" | "NOMBRE" | "APELLIDOS" | "FECHAHORA";
export type ClienteCreationAttributes = Optional<ClienteAttributes, ClienteOptionalAttributes>;

export class Cliente extends Model<ClienteAttributes, ClienteCreationAttributes> implements ClienteAttributes {
  IDCLIENTE!: number;
  NOMBRE?: string;
  APELLIDOS?: string;
  FECHAHORA?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Cliente {
    return Cliente.init({
    IDCLIENTE: {
      autoIncrement: true,
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
    FECHAHORA: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CLIENTES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__tmp_ms_x__1EA344C2461089FC",
        unique: true,
        fields: [
          { name: "IDCLIENTE" },
        ]
      },
    ]
  });
  }
}
