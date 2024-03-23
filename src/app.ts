import express, { Application } from 'express';
import dotenv from 'dotenv'

// DB
import { sequelize } from './database';

// ROUTERS
import proveedoresRouter from './router/proveedores.routes'
import usuariosRouter from './router/usuarios.routes'
import clientesRouter from './router/clientes.routes'
import authRouter from './router/auth.routes'

import { getConnection } from './database/getConnection';
import { initModels } from './models/init-models';
import { MiddlewareTokenValidator } from './middlewares/MiddlewareTokenValidator.middleware';
// import { initModels } from './models/init-models';

const app: Application = express();
const port = process.env.PORT || 8000;

dotenv.config()
// app.use(cors())
app.use(express.urlencoded({ extended: true }))
// app.use(fileUpload())
app.use(express.json())
app.use(express.static('public'))
app.use(express.static('./src/public'))

app.use("/auth", authRouter)
// app.use(MiddlewareTokenValidator)
app.use("/usuarios", usuariosRouter)
// app.use("/usuarios", usuariosRouter)
app.use("/clientes", clientesRouter)
app.use("/proveedores", proveedoresRouter)

app.listen(port, async () => {
  
  initModels(sequelize)

  await getConnection()
  
  console.log(`Servidor corriendo en http://localhost:${port}`);
  
});