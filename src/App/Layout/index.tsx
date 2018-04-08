import * as React from 'react'

import { Header } from './Header'
import { SideBar } from './SideBar'
import { Content } from './Content'

export const Layout: React.SFC = ({ children }) => (
  <>
    <Header />
    <SideBar />
    <Content>{children}</Content>
  </>
)
