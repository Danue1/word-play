import * as React from 'react'
import * as SocketIOClient from 'socket.io-client'

import './index.scss'
import { Layout } from '@/App/Base'
import { Character } from './Character'
import { ChatList } from './ChatList'
import { RoomList } from './RoomList'

export class Home extends React.Component {
  private readonly socket = this.initialiseSocket()

  public render (): JSX.Element {
    return (
      <Layout name='Home'>
        <RoomList />
        <Layout name='SubContent'>
          <Character onClick={this.onClick()} />
          <ChatList />
        </Layout>
      </Layout>
    )
  }

  private initialiseSocket () {
    const endPoint = 'http://localhost:3030'
    const socket = SocketIOClient(endPoint)

    socket.on('hello', ({ message }) => console.log(message))

    return socket
  }

  private onClick () {
    return (): void => {
      const eventName = 'hello'
      const payload = { message: 'index' }

      this.socket.emit(eventName, payload)
    }
  }
}
