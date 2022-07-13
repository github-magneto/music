import React from 'react'

import Console from './Component.Console'
import Tool from './Component.Tool'
import BGM from './Component.BGM'
import Canvas from './Component.Canvas'

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

  React.useEffect(() => {
    const e = () => {
      Imitation.assignState({ screenWidth: document.documentElement.clientWidth, screenHeight: document.documentElement.clientHeight })
    }
    e()
  }, [])

  if (!Imitation.state.screenWidth || !Imitation.state.screenHeight) return null

  return <div style={{ width: Imitation.state.screenWidth, height: Imitation.state.screenHeight, position: 'relative' }}>

    {/* <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto', width: '100%', height: '100%' }}>
      <Canvas />
    </div> */}

    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', transform: `scale(${Imitation.state.scale})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Console />
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', right: 12, top: 12, position: 'absolute', zIndex: 1 }}>
      <Tool />
    </div>

    <div style={{ width: 'fit-content', bottom: 12, left: 0, right: 0, margin: 'auto', position: 'absolute', zIndex: 1, width: 'calc(100% - 24px)' }}>
      <BGM />
    </div>

  </div>
}

export default Imitation.withBindRender(App)