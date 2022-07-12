import React from 'react'

import { Tooltip } from '@mui/material'

import { includesArray, agent } from '../utils/common'
import Imitation from '../utils/imitation'

function ConsoleButton(props) {
  const { name, src, url, codeInclued, codeMain, codeExclude, stay, style } = props

  const ref = React.useRef()
  const audioRef = React.useRef(new Audio(src))

  const [click, setClick] = React.useState(false)

  const onClick = () => {
    if (Imitation.state.cover) audioRef.current.pause()
    audioRef.current = new Audio(src)
    audioRef.current.volume = Imitation.state.volume
    audioRef.current.play()
    setClick(true)
    if (ref.current) clearTimeout(ref.current)
    ref.current = setTimeout(() => { setClick(false); ref.current = null }, 500)
  }

  const clicking = React.useMemo(() => {
    if (stay) {
      return codeInclued.some(i => includesArray(i, Imitation.state.pressKeep)) || click
    } else {
      return click
    }
  })

  React.useEffect(() => {
    if (codeMain && codeMain.length !== 0 && !codeMain.includes(Imitation.state.pressKeep[Imitation.state.pressKeep.length - 1])) return
    if (codeExclude && codeExclude.length !== 0 && includesArray(codeExclude, Imitation.state.pressKeep)) return
    if (!codeInclued.some(i => includesArray(i, Imitation.state.pressKeep))) return

    onClick()
  }, [Imitation.state.pressUpdate])

  const style_ = React.useMemo(() => {
    var s = {
      flexShrink: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: '0.5s all',
      width: 72,
      height: 72,
      margin: 8,
      borderRadius: 12,
      fontWeight: 'bold',
      position: 'relative',
      fontSize: 12,
      boxShadow: '0 4px 8px gray',
    }
    var add
    if (style) {
      if (typeof style === 'function') add = style(clicking)
      if (typeof style === 'object') add = style.reduce((t, i) => ({ ...t, ...i(clicking) }), {})
    }
    if (add) s = { ...s, ...add }
    return s
  }, [clicking])

  const R = <div style={{ display: 'inline-block' }}>
    <div
      style={style_}
      onMouseDown={agent() === 'pc' ? onClick : undefined}
      onTouchStart={agent() === 'phone' ? onClick : undefined}
    >
      <div>{name ? name : ''}</div>
    </div>
  </div>

  return Imitation.state.tooltip ?
    <Tooltip title={codeInclued.map(i => <div>{i.join(' + ')}</div>)}>
      {R}
    </Tooltip>
    : R
}

ConsoleButton.colorWB = (clicking) => {
  return {
    background: clicking ? 'black' : 'white',
    color: clicking ? 'white' : 'black'
  }
}
ConsoleButton.colorBW = (clicking) => {
  return {
    background: clicking ? 'white' : 'black',
    color: clicking ? 'black' : 'white'
  }
}
ConsoleButton.rotate = (clicking) => {
  return {
    transform: clicking ? `rotate(${Math.random() < 0.5 ? 45 : -45}deg)` : 'rotate(0)'
  }
}

function ConsoleCorePiano(props) {
  return <div id='console' style={{ position: 'absolute', width: 1500, height: 1000 }}>

    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      <div>
        {
          ['0', '1', '2', '3', '4', '5', '6', '7', '8'].map(i => {
            return <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              {
                props.media['console.piano.json'].filter(i_ => i_.name.includes(i)).map((i, index) => {
                  if (i.name.includes('M')) return <ConsoleButton {...i} style={[ConsoleButton.colorBW, ConsoleButton.rotate]} />
                  return <ConsoleButton {...i} style={[ConsoleButton.colorWB, ConsoleButton.rotate]} />
                })
              }
            </div>
          })
        }
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {
          'VCDRTGF'.split('').map(i => {
            return <ConsoleButton {...props.media['console.keyboard.json'].find(i_ => i_.name === i)} stay={true} style={[ConsoleButton.colorWB]} />
          })
        }
        <div style={{ margin: '0 16px' }}>
          {
            props.media['console.keyboard.json'].filter(i => 'Space' === i.name).map((i, index) => {
              return <ConsoleButton {...i} stay={true} style={[ConsoleButton.colorWB]} />
            })
          }
        </div>
        {
          'JHUIKMN'.split('').map(i => {
            return <ConsoleButton {...props.media['console.keyboard.json'].find(i_ => i_.name === i)} stay={true} style={[ConsoleButton.colorWB]} />
          })
        }
      </div>
    </div>

  </div>
}

function ConsoleCoreHatsune(props) {
  return <div id='console' style={{ position: 'absolute', width: 1000, height: 500 }}>

    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      <div>
        {
          props.media['console.hatsune.json'].filter(i => i.name === 'Beat').map((i) => {
            return <ConsoleButton {...i} style={[ConsoleButton.colorWB, ConsoleButton.rotate]} />
          })
        }
      </div>
      <div style={{ width: 800, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {
          props.media['console.hatsune.json'].filter(i => i.name === 'Hatsune').map((i) => {
            return <ConsoleButton {...i} style={[ConsoleButton.colorWB, ConsoleButton.rotate]} />
          })
        }
      </div>
    </div>

  </div>
}

export const consoleCoreOptions = [
  {
    name: 'Piano',
    dependencies: ['console.keyboard.json', 'console.piano.json'],
    component: ConsoleCorePiano,
  },
  {
    name: 'Hatsune',
    dependencies: ['console.hatsune.json'],
    component: ConsoleCoreHatsune,
  },
]

function App() {
  const currentConsole = React.useMemo(() => {
    return consoleCoreOptions.find(i => i.name === Imitation.state.console)
  }, [Imitation.state.console])

  const currentMedia = React.useMemo(() => {
    const need = currentConsole.dependencies.filter(i => !Imitation.state.media.find(i_ => i_.name === i))
    if (need.length) return

    const r = {}
    currentConsole.dependencies.forEach(i => r[i] = Imitation.state.media.find(i_ => i_.name === i).source)
    return r
  }, [Imitation.state.console, Imitation.state.media])

  React.useEffect(() => {
    const currentConsole = consoleCoreOptions.find(i => i.name === Imitation.state.console)

    const need = currentConsole.dependencies.filter(i => !Imitation.state.media.find(i_ => i_.name === i))

    if (need.length) {
      Imitation.state.xhrLoading = true
      Imitation.setState(Imitation.state)
      Promise.all(
        need.map(i => {
          return new Promise((resolve) => {
            if (i === 'console.piano.json') import('../media/console.piano.json').then(res => resolve({ name: i, source: res.default }))
            if (i === 'console.keyboard.json') import('../media/console.keyboard.json').then(res => resolve({ name: i, source: res.default }))
            if (i === 'console.hatsune.json') import('../media/console.hatsune.json').then(res => resolve({ name: i, source: res.default }))
          })
        })
      ).then(res => {
        Imitation.state.media = [...Imitation.state.media, ...res]
        Imitation.state.xhrLoading = false
        Imitation.setState(Imitation.state)
      })
    }
  }, [Imitation.state.console])

  React.useEffect(() => {
    if (!currentMedia) return

    const el = document.getElementById('console')

    const size = Math.min(Imitation.state.screenWidth / el.offsetWidth, Imitation.state.screenHeight / el.offsetHeight)

    if (size < 1) Imitation.assignState({ scale: size })
  }, [currentMedia])

  return currentMedia ? <currentConsole.component media={currentMedia} /> : null
}

export default App