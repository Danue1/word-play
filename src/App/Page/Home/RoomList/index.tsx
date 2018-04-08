import * as React from 'react'

import './index.scss'
import { Layout } from '@/App/Base'
import { Room } from './Room'
import { dummy } from './dummy'

export const RoomList: React.SFC = () => {
  const roomList = dummy.map((info, index) => (
    <Room info={info} key={index} />
  ))

  return (
    <Layout name='RoomList'>{roomList}</Layout>
  )
}
