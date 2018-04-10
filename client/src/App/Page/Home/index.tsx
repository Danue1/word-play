import * as React from 'react'
import * as SocketIOClient from 'socket.io-client'

import './index.scss'
import { Layout } from '@/App/Base'
import { Character } from './Character'
import { ChatList } from './ChatList'
import { RoomList } from './RoomList'

const endPoint = 'http://localhost:3003'
const socket = SocketIOClient(endPoint)
socket.emit('hello', { message: 'hi' })
socket.on('hello', ({ message }) => console.log(message))
// socket.disconnect()

export const Home: React.SFC = () => (
  <Layout name='Home'>
    <RoomList />
    <Layout name='SubContent'>
      <Character />
      <ChatList />
    </Layout>
  </Layout>
)
