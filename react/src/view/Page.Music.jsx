import React from 'react'

import Console from './Component.Console'
import Tool from './Component.Tool'
import BGM from './Component.BGM'

import Imitation from '../utils/imitation'

function App() {

  React.useEffect(() => {
    const event = (e) => {
      console.log(e.code)

      if (Imitation.state.pressKeep[Imitation.state.pressKeep.length - 1] === e.code) return
      Imitation.state.pressKeep = Imitation.state.pressKeep.includes(e.code) ? Imitation.state.pressKeep : [...Imitation.state.pressKeep, e.code]
      Imitation.state.pressUpdate = Imitation.state.pressUpdate + 1
      Imitation.setState(Imitation.state)
    }
    const event_ = (e) => {
      Imitation.state.pressKeep = Imitation.state.pressKeep.filter(i => !i.includes(e.code))
      Imitation.setState(Imitation.state)
    }

    window.addEventListener('keydown', event)
    window.addEventListener('keyup', event_)
    return () => {
      window.removeEventListener('keydown', event)
      window.removeEventListener('keyup', event_)
    }
  }, [])

  return <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>

    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', transform: `scale(${Imitation.state.scale})` }}>
        <Console />
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', right: 12, bottom: 12, position: 'absolute', zIndex: 1 }}>
      <Tool />
    </div>

    <div style={{ width: 'fit-content', bottom: 12, left: 0, right: 0, margin: 'auto', position: 'absolute', zIndex: 1 }}>
      <BGM />
    </div>

  </div>
}

export default Imitation.withBindRender(App)