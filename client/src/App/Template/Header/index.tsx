import * as React from 'react'

import './index.scss'
import { Layout, Link } from '@/App/Base'

export const Header: React.SFC = () => (
  <Layout name='Header'>
    <Link to='/room/create' className='MakeRoom'>방 만들기</Link>
    <Link to='/room/quickin' className='QuickPlay'>빠른 입장</Link>
    <Link to='/room/store' className='Store'>상점</Link>
    <Link to='/room/lank' className='Rank'>랭크</Link>
    <Link to='/room/lank' className='Login'>로그인</Link>
  </Layout>
)
