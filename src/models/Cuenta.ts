import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CuentaAttributes {
  IDCUENTA: number;
  IDCLIENTE?: number;
  FECHAHORA?: Date;
  SALDO?: number;
}

export type CuentaPk = "IDCUENTA";
export type CuentaId = Cuenta[CuentaPk];
export type CuentaOptionalAttributes = "IDCLIENTE" | "FECHAHORA" | "SALDO";
export type CuentaCreationAttributes = Optional<CuentaAttributes, CuentaOptionalAttributes>;

export class Cuenta extends Model<CuentaAttributes, CuentaCreationAttributes> implements CuentaAttributes {
  IDCUENTA!: number;
  IDCLIENTE?: number;
  FECHAHORA?: Date;
  SALDO?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof Cuenta {
    return Cuenta.init({
    IDCUENTA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDCLIENTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAHORA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    SALDO: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CUENTAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CUENTAS__95F1F49CB3FBEA7A",
        unique: true,
        fields: [
          { name: "IDCUENTA" },
        ]
      },
    ]
  });
  }
}
