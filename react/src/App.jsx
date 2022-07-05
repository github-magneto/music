import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Default from './view/Page.Default'
import Music from './view/Page.Music'
import Base64 from './view/Page.Base64'
import Edit from './view/Page.Edit'
import Message from './view/Component.Message'
import Spin from './view/Component.Spin'

function App() {
  return <HashRouter>
    <Message />
    <Spin />

    <Switch>
      <Route path='/Music' exact><Music /></Route>
      <Route path='/Base64' exact><Base64 /></Route>
      <Route path='/Edit' exact><Edit /></Route>
    </Switch>
  </HashRouter>
}

export default App