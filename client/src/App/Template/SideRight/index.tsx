import * as React from 'react'

import './index.scss'
import { Link, Divider } from '@/App/Base'

const Layout: React.SFC =
  ({ children }) => (
    <aside id='Side' className='Right'>{children}</aside>
  )

const dummy = '0123456789'.repeat(10).split('')

export const SideRight: React.SFC = () => (
  <Layout>
    <div id='GuestList'>접속자 리스트</div>
    <Divider />
    {dummy.map((_, index): JSX.Element => (
      <Link to='' className='Basic' key={index}>Guest{index}</Link>
    ))}
  </Layout>
)
