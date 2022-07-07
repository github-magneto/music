import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Music from './view/Page.Music'
import Message from './view/Component.Message'
import Spin from './view/Component.Spin'

function App() {
  return <HashRouter>
    <Message />
    <Spin />

    <Switch>
      <Route path='/' exact><Music /></Route>
      <Route path='/Base64' component={() => import('./view/Page.Base64')} exact />
    </Switch>
  </HashRouter>
}

export default App