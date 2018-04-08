import * as React from 'react'

import './index.scss'

const Layout: React.SFC =
  ({ children }) => (
    <aside id='SideBar'>{children}</aside>
  )

export const SideBar: React.SFC = () => (
  <Layout>
    사이드바
  </Layout>
)
