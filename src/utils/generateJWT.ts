import { sign } from 'jsonwebtoken'

export const genGWT = (id:number) => {

    const payload = {
        id_usuario: id
    }

    const token = sign(payload, process.env.SECRET_JWT_SEED ?? 'secreta', {
      expiresIn: '2h'
    })

    return token

}

export const generateJWT = async (id: number): Promise<string> => {
  return await new Promise<string>((resolve, reject) => {
    try {
      const payload = {
        id_usuario: id
      }

      const token = sign(payload, process.env.SECRET_JWT_SEED ?? 'secreta', {
        expiresIn: '2h'
      })

      resolve(token)
    } catch (err) {
      reject(err)
    }
  })
}
