import * as React from 'react'

import './index.scss'

const Layout: React.SFC =
  ({ children }) => (
    <main id='Content'>{children}</main>
  )

export const Content: React.SFC = Layout
