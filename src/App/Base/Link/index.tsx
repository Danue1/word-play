import * as React from 'react'
import { Link as _Link, LinkProps } from 'react-router-dom'

import './index.scss'
import { Layout } from '@/App/Base'

export const Link: React.SFC<LinkProps> =
  ({ children, to, className }) => (
    <Layout name='Link'>
      <_Link to={to} className={className}>{children}</_Link>
    </Layout>
  )
