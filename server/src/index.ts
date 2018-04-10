import * as express from 'express'
import * as http from 'http'
import * as SocketIO from 'socket.io'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({ origin: '*' }))
app.use((req, res, next): void => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', false as any)
})

const server = http.createServer(app)
const io = SocketIO.listen(server as any, {
  origins: '*:*',
  transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling'],
})

io.on('connection', (socket: SocketIO.Socket): void => {
  console.log('connection in index.ts')

  socket.on('hello', ({ message }): void => console.log('hello:', message))
  socket.on('disconnect', (): void => console.log('disconnect'))
})

const port = 3003
server.listen(port, () => console.log('Express listening on port', port))
