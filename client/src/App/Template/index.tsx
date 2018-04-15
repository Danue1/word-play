import * as React from 'react'

import './index.scss'
import { Layout } from '@/App/Base'
import { Header } from './Header'

export const Template: React.SFC = ({ children }) => (
  <>
    <Layout name='Top'>
      <Header />
    </Layout>
    <Layout name='Middle'>
      {children}
    </Layout>
    <Layout name='Bottom'>
      저작권 표시 등
    </Layout>
  </>
)
