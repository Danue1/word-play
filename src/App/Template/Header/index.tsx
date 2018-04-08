import * as React from 'react'

import './index.scss'
import { Link } from '@/App/Base'
import { Spacer } from '../Spacer'

const Layout: React.SFC =
  ({ children }) => (
    <header id='Header'>{children}</header>
  )

export const Header: React.SFC = () => (
  <Layout>
    <Link to='/'>글자놀이</Link>
    <Spacer />
    <Link to='/login'>로그인</Link>
  </Layout>
)
