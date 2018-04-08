import * as React from 'react'
import { Link as _Link, LinkProps } from 'react-router-dom'

import './index.scss'

const Layout: React.SFC =
  ({ children }) => (
    <div id='Link'>{children}</div>
  )

export const Link: React.SFC<LinkProps> =
  ({ children, to }) => (
    <Layout>
      <_Link to={to}>{children}</_Link>
    </Layout>
  )
