import React from 'react'

import Music from './view/Page.Music'
import Base64 from './view/Page.Base64'
import Message from './view/Component.Message'
import Spin from './view/Component.Spin'

function App() {
  return <>
    <Message />
    <Spin />

    {/* <Base64 /> */}
    <Music />
  </>
}

export default App