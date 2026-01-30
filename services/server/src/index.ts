import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
// import Keycloak from 'keycloak-connect'

// import config from './keycloak'
import transactionRoutes from './routes/transactions'

dotenv.config()
const app = express()
const port = process.env.PORT
// const keycloak = new Keycloak({}, config)

app.use(cors())
app.use(express.json())
// app.use(keycloak.middleware())
// app.use(keycloak.protect())
app.use('/api/v1/', transactionRoutes)

const server = () => {
  app.listen(port, () => {
    console.info(`Server is running on port ${port}`)
  })
}

server()
