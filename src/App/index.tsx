import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './Style/_index.scss'
import { Template } from './Template'
import { Page } from './Page'

export const App: React.SFC = () => (
  <BrowserRouter>
    <Template>
      <Page />
    </Template>
  </BrowserRouter>
)
