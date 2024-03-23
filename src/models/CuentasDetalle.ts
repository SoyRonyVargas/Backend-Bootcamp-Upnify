import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CuentasDetalleAttributes {
  IDCUENTADETALLE: number;
  IDCATEGORIA?: number;
  IDPROVEEDOR?: number;
  IDCUENTA?: number;
  DESCRIPCION?: string;
  CARGO?: number;
  ABONO?: number;
  FECHA?: Date;
  IDUSUARIO?: number;
}

export type CuentasDetallePk = "IDCUENTADETALLE";
export type CuentasDetalleId = CuentasDetalle[CuentasDetallePk];
export type CuentasDetalleOptionalAttributes = "IDCATEGORIA" | "IDPROVEEDOR" | "IDCUENTA" | "DESCRIPCION" | "CARGO" | "ABONO" | "FECHA" | "IDUSUARIO";
export type CuentasDetalleCreationAttributes = Optional<CuentasDetalleAttributes, CuentasDetalleOptionalAttributes>;

export class CuentasDetalle extends Model<CuentasDetalleAttributes, CuentasDetalleCreationAttributes> implements CuentasDetalleAttributes {
  IDCUENTADETALLE!: number;
  IDCATEGORIA?: number;
  IDPROVEEDOR?: number;
  IDCUENTA?: number;
  DESCRIPCION?: string;
  CARGO?: number;
  ABONO?: number;
  FECHA?: Date;
  IDUSUARIO?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof CuentasDetalle {
    return CuentasDetalle.init({
    IDCUENTADETALLE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDCATEGORIA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IDPROVEEDOR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IDCUENTA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CARGO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ABONO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    IDUSUARIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CUENTAS_DETALLE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CUENTAS___332F2D03E98F8B68",
        unique: true,
        fields: [
          { name: "IDCUENTADETALLE" },
        ]
      },
    ]
  });
  }
}
