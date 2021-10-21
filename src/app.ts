import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
  cors: {
    origin: '*'
  }
})

io.on('connection', socket => {
  console.log('Usuário connectado no socket ' + socket.id)
})

export { serverHttp, io }