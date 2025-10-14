import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import MongoDB from './db/Mongo'
import transactionRoutes from './routes/transactions'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/api/v1/', transactionRoutes)

const server = () => {
  MongoDB()
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

server()

//