import * as React from 'react'

import './index.scss'
import { Layout } from '@/App/Base'
import { Character } from './Character'
import { ChatList } from './ChatList'
import { RoomList } from './RoomList'

export const Home: React.SFC = () => (
  <Layout name='Home'>
    <RoomList />
    <Layout name='SubContent'>
      <Character />
      <ChatList />
    </Layout>
  </Layout>
)
