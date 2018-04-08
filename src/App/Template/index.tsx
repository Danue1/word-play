import * as React from 'react'

import { Container } from './Container'
import { Header } from './Header'
import { SideBar } from './SideBar'
import { Content } from './Content'

export const Template: React.SFC = ({ children }) => (
  <>
    <Header />
    <Container>
      <SideBar />
      <Content>{children}</Content>
    </Container>
  </>
)
