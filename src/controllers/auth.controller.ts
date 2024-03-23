import { generateJWT } from "../utils/generateJWT";
import { Usuario } from "../models/Usuario";
import { Controller } from "../types";

type AuthLoginDTO = {
    correo: string
    password: string
}
export const AuthLoginCtrl : Controller<any, AuthLoginDTO> = async (req, res) => {

    try {
        
        const { correo , password } = req.body

        const usuario = await Usuario.findOne({
            where: {
                CORREO: correo,
                CONTRASENIA: password
            }
        })
        
        if( !usuario ) return res.status(400).json({
            msg: "Usuario o contraseña invalidos",
            ok: false
        })

        const token = await generateJWT(usuario.IDUSUARIO)

        return res.status(200).json({
            data: {
                usuario,
                token
            },
            ok: true
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false
        })
    }

}
