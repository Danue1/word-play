import * as React from 'react'

import './index.scss'
import { Link } from '@/App/Base'

const Layout: React.SFC =
  ({ children }) => (
    <aside id='Side' className='Left'>{children}</aside>
  )

export const SideLeft: React.SFC = () => (
  <Layout>
    <Link to='/room/create' className='Basic'>방 만들기</Link>
    <Link to='/room/quickin' className='Basic'>빠른 입장</Link>
    <Link to='/room/store' className='Basic'>상점</Link>
    <Link to='/room/lank' className='Basic'>랭크</Link>
  </Layout>
)
