// import { validateJWT } from '../utils/validateJWT'
import { type JWTAuthPayload, type Middleware } from '../types/index'
import { validateJWT } from '../utils/validateJWT'

export const MiddlewareTokenValidator: Middleware<JWTAuthPayload> = (req, res, next) => {
  
  const token = req.headers['authorization'] as string

  console.log('token');
  console.log(token);
  console.log(req.headers);
  

  if (!token) {
    return res.status(401).json({
      data: null,
      msg: 'Sin autorizacion',
      ok: false
    })
  }

  const result = validateJWT(token)

  console.log('validateJWT')
  console.log(result)

  if (result === null) {
    return res.status(401).json(
      {
        data: null,
        msg: 'Token invalido',
        ok: false
      }
    )
  }

  req.payload = result

  next()
}
