import * as React from 'react'

import './index.scss'
import { Layout } from '@/App/Base'
import { RoomList } from './RoomList'
import { UserList } from './UserList'
import { Character } from './Character'
import { Chatting } from '@/App/Page/Home/Chatting'

export const Home: React.SFC = () => (
  <Layout name='Home'>
    <UserList />
    <RoomList />

    <Character />
    <Chatting />
  </Layout>
)
