import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Music from './view/Page.Music'
import Base64 from './view/Page.Base64'
import Message from './view/Component.Message'
import Spin from './view/Component.Spin'

function App() {
  return <>
    <Message />
    <Spin />

    <HashRouter>
      <Switch>
        <Route path='/' exact><Music /></Route>
        <Route path='/Base64' exact><Base64 /></Route>
      </Switch>
    </HashRouter>
  </>
}

export default App