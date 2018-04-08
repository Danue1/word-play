import * as React from 'react'

import './index.scss'
import { SideLeft } from './SideLeft'
import { SideRight } from './SideRight'
import { Content } from './Content'

export const Template: React.SFC = ({ children }) => (
  <>
    <SideLeft />
    <Content>{children}</Content>
    <SideRight />
  </>
)
