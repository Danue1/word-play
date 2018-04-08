import * as React from 'react'

import './index.scss'
import { Layout } from './Layout'
import { Page } from './Page'

export const App: React.SFC = () => (
  <Layout>
    <Page />
  </Layout>
)
