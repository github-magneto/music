import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Default from './view/Page.Default'
import Music from './view/Page.Music'
import Message from './view/Component.Message'
import Spin from './view/Component.Spin'

function App() {
  return <HashRouter>
    <Message />
    <Spin />

    <Switch>
      <Route path='/' exact><Default /></Route>
      <Route path='/Music' exact><Music /></Route>
    </Switch>
  </HashRouter>
}

export default App