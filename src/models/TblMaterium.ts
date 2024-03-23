import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TblMateriumAttributes {
  u_n_m_a__i_d: number;
  u_n_m_a__m_a_t_e_r_i_a: string;
  u_n_m_a__c_u_a_t_r_i_m_e_s_t_r_e: string;
  created_at: Date;
  updated_at: Date;
}

export type TblMateriumPk = "u_n_m_a__i_d";
export type TblMateriumId = TblMaterium[TblMateriumPk];
export type TblMateriumOptionalAttributes = "u_n_m_a__i_d" | "created_at" | "updated_at";
export type TblMateriumCreationAttributes = Optional<TblMateriumAttributes, TblMateriumOptionalAttributes>;

export class TblMaterium extends Model<TblMateriumAttributes, TblMateriumCreationAttributes> implements TblMateriumAttributes {
  u_n_m_a__i_d!: number;
  u_n_m_a__m_a_t_e_r_i_a!: string;
  u_n_m_a__c_u_a_t_r_i_m_e_s_t_r_e!: string;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof TblMaterium {
    return TblMaterium.init({
    u_n_m_a__i_d: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    u_n_m_a__m_a_t_e_r_i_a: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    u_n_m_a__c_u_a_t_r_i_m_e_s_t_r_e: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_materia',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__tbl_mate__B436E947D3F01B60",
        unique: true,
        fields: [
          { name: "u_n_m_a__i_d" },
        ]
      },
    ]
  });
  }
}
