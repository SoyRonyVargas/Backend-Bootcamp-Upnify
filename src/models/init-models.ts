import type { Sequelize } from "sequelize";
import { Cliente as _Cliente } from "./Cliente";
import type { ClienteAttributes, ClienteCreationAttributes } from "./Cliente";
import { Cuenta as _Cuenta } from "./Cuenta";
import type { CuentaAttributes, CuentaCreationAttributes } from "./Cuenta";
import { CuentasDetalle as _CuentasDetalle } from "./CuentasDetalle";
import type { CuentasDetalleAttributes, CuentasDetalleCreationAttributes } from "./CuentasDetalle";
import { Proveedore as _Proveedore } from "./Proveedore";
import type { ProveedoreAttributes, ProveedoreCreationAttributes } from "./Proveedore";
import { Usuario as _Usuario } from "./Usuario";
import type { UsuarioAttributes, UsuarioCreationAttributes } from "./Usuario";
import { TblMaterium as _TblMaterium } from "./TblMaterium";
import type { TblMateriumAttributes, TblMateriumCreationAttributes } from "./TblMaterium";

export {
  _Cliente as Cliente,
  _Cuenta as Cuenta,
  _CuentasDetalle as CuentasDetalle,
  _Proveedore as Proveedore,
  _Usuario as Usuario,
  _TblMaterium as TblMaterium,
};

export type {
  ClienteAttributes,
  ClienteCreationAttributes,
  CuentaAttributes,
  CuentaCreationAttributes,
  CuentasDetalleAttributes,
  CuentasDetalleCreationAttributes,
  ProveedoreAttributes,
  ProveedoreCreationAttributes,
  UsuarioAttributes,
  UsuarioCreationAttributes,
  TblMateriumAttributes,
  TblMateriumCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Cliente = _Cliente.initModel(sequelize);
  const Cuenta = _Cuenta.initModel(sequelize);
  const CuentasDetalle = _CuentasDetalle.initModel(sequelize);
  const Proveedore = _Proveedore.initModel(sequelize);
  const Usuario = _Usuario.initModel(sequelize);
  const TblMaterium = _TblMaterium.initModel(sequelize);


  return {
    Cliente: Cliente,
    Cuenta: Cuenta,
    CuentasDetalle: CuentasDetalle,
    Proveedore: Proveedore,
    Usuario: Usuario,
    TblMaterium: TblMaterium,
  };
}
