import * as React from 'react'

import './index.scss'
import { Layout } from '@/App/Base'

export const Content: React.SFC =
  ({ children }) => (
    <Layout name='Content'>{children}</Layout>
  )
