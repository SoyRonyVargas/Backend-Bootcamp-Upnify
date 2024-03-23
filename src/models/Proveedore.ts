import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProveedoreAttributes {
  IDPROVEEDOR: number;
  NOMBRE?: string;
  FECHAHORA?: Date;
}

export type ProveedorePk = "IDPROVEEDOR";
export type ProveedoreId = Proveedore[ProveedorePk];
export type ProveedoreOptionalAttributes = "IDPROVEEDOR" | "NOMBRE" | "FECHAHORA";
export type ProveedoreCreationAttributes = Optional<ProveedoreAttributes, ProveedoreOptionalAttributes>;

export class Proveedore extends Model<ProveedoreAttributes, ProveedoreCreationAttributes> implements ProveedoreAttributes {
  IDPROVEEDOR!: number;
  NOMBRE?: string;
  FECHAHORA?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Proveedore {
    return Proveedore.init({
    IDPROVEEDOR: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FECHAHORA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'PROVEEDORES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__tmp_ms_x__4EB245E4B7F1189A",
        unique: true,
        fields: [
          { name: "IDPROVEEDOR" },
        ]
      },
    ]
  });
  }
}
