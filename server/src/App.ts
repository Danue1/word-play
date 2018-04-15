import * as dotenv from 'dotenv'
import * as Express from 'express'
import * as http from 'http'
import * as SocketIO from 'socket.io'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

interface AppProps {
  readonly envPath: string
}

export class App {
  private readonly app = Express()
  private readonly server = http.createServer(this.app)
  private readonly io = SocketIO.listen(this.server as any)

  public constructor ({ envPath }: AppProps) {
    this.setEnvironmentVariable(envPath)
    this.configure()
    this.attachSocket()
  }

  public start (): void {
    const { port } = process.env

    this.server.listen(port, (): void => {
      console.log('Express listening on port:', port)
    })
  }

  private setEnvironmentVariable (path: string): void {
    dotenv.config({ path })
  }

  private configure (): void {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json())
    this.app.use(cors({ origin: '*' }))
    this.app.use((
      _req: Express.Request,
      res: Express.Response,
      _next: Express.NextFunction
    ): void => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
      res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
      res.setHeader('Access-Control-Allow-Credentials', false as any)
    })
  }

  private attachSocket (): void {
    this.io.on('connection', (socket: SocketIO.Socket): void => {
      console.log('connection in index.ts')

      console.log(process.env.NODE_ENV)

      socket.on('hello', ({ message }): void => {
        socket.emit('hello', { message })
      })
      socket.on('disconnect', (): void => console.log('disconnect'))
    })
  }
}
