import * as React from 'react'

import './index.scss'

const Layout: React.SFC =
  ({ children }) => (
    <div id='Container'>{children}</div>
  )

export const Container: React.SFC = Layout
