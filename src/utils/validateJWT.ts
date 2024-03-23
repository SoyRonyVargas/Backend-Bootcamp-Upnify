import { type JWTAuthPayload } from '../types'
import { verify } from 'jsonwebtoken'

export const validateJWT = (token: string): JWTAuthPayload | null => {
  try {
    const decoded = verify(token, process.env.SECRET_JWT_SEED ?? 'secreta') as JWTAuthPayload

    return decoded
  } catch (err) {
    return null
  }
}
