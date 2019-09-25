import React from 'react'
import { Switch, Route } from 'react-router'

import {
  HOME,
  LOGIN,
  REGISTER
} from '../constants/routes'
import Dashboard from '../features/dashboard-layout'
import Home from '../features/home'
import SignUp from '../features/register'
import SignIn from '../features/login'

const Routes = () => (
  <Dashboard>
    <Switch>
        <Route exact path={HOME} component={Home}/>
        <Route exact path={REGISTER} component={SignUp}/>
        <Route exact path={LOGIN} component={SignIn}/>
    </Switch>
  </Dashboard>
)

export default Routes
