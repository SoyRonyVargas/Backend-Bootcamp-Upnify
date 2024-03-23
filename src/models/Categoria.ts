import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CategoriaAttributes {
  IDCATEGORIA: number;
  CATEGORIA?: string;
  FECHAHORA: Date;
}

export type CategoriaPk = "IDCATEGORIA";
export type CategoriaId = Categoria[CategoriaPk];
export type CategoriaOptionalAttributes = "IDCATEGORIA" | "CATEGORIA" | "FECHAHORA";
export type CategoriaCreationAttributes = Optional<CategoriaAttributes, CategoriaOptionalAttributes>;

export class Categoria extends Model<CategoriaAttributes, CategoriaCreationAttributes> implements CategoriaAttributes {
  IDCATEGORIA!: number;
  CATEGORIA?: string;
  FECHAHORA!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Categoria {
    return Categoria.init({
    IDCATEGORIA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CATEGORIA: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    FECHAHORA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'CATEGORIAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CATEGORI__ADC0E719291BD187",
        unique: true,
        fields: [
          { name: "IDCATEGORIA" },
        ]
      },
    ]
  });
  }
}
