import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './Home'
import { Login } from './Login'
import { NoMatch } from './NoMatch'

export const Page: React.SFC = () => (
  <Switch>
    <Route path='/' component={Home} exact={true} />
    <Route path='/login' component={Login} exact={true} />
    <Route component={NoMatch} />
  </Switch>
)
