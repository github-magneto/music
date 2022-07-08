import React from 'react'

import { Tooltip } from '@mui/material'

import { musicPlay, includesArray, agent } from '../utils/common'
import Imitation from '../utils/imitation'

function ConsoleButtonBox(Component) {

  return function ConsoleButton(props) {
    const { name, src, url, codeInclued, codeMain, codeExclude, stay } = props

    const ref = React.useRef()

    const [click, setClick] = React.useState(false)

    const onClick = () => {
      if (src) musicPlay(src)
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

    const p = { ...props, clicking, onClick }

    const R = <div style={{ display: 'inline-block' }}><Component {...p} /></div>

    return Imitation.state.tooltip ?
      <Tooltip title={codeInclued.map(i => <div>{i.join(' + ')}</div>)}>
        {R}
      </Tooltip>
      : R
  }

}

function ConsoleButtonBasic(props) {
  const { name, clicking, onClick } = props

  const style = React.useMemo(() => {
    return {
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
      background: clicking ? 'gray' : 'white',
    }
  }, [clicking])


  return <div style={style} onMouseDown={agent() === 'pc' ? onClick : undefined} onTouchStart={agent() === 'phone' ? onClick : undefined}>
    <div>{name ? name : ''}</div>
  </div>
}

function ConsoleButtonGradient(props) {
  const { name, clicking, onClick } = props

  const style = React.useMemo(() => {
    return {
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
      background: clicking ? 'gray' : 'white',
      transform: clicking ? `rotate(${Math.random() < 0.5 ? 45 : -45}deg)` : 'rotate(0)'
    }
  }, [clicking])

  return <div style={style} onMouseDown={agent() === 'pc' ? onClick : undefined} onTouchStart={agent() === 'phone' ? onClick : undefined}>
    <div>{name ? name : ''}</div>
  </div>
}

const ConsoleButtonBasicRender = ConsoleButtonBox(ConsoleButtonBasic)
const ConsoleButtonGradientRender = ConsoleButtonBox(ConsoleButtonGradient)

function ConsoleCorePiano(props) {
  return <div id='console' style={{ position: 'absolute', width: 1500, height: 800 }}>

    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ width: 616, height: 616, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {
          props.media['console.piano.json'].filter(i => !i.name.includes('M') && !['A0', 'B0', 'C8', 'A0M'].includes(i.name)).map((i, index) => {
            return <ConsoleButtonGradientRender {...i} />
          })
        }
      </div>
      <div style={{ width: 616, height: 440, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {
          props.media['console.piano.json'].filter(i => i.name.includes('M') && !['A0', 'B0', 'C8', 'A0M'].includes(i.name)).map((i, index) => {
            return <ConsoleButtonGradientRender {...i} />
          })
        }
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column' }}>
        {
          props.media['console.piano.json'].filter(i => ['A0', 'B0', 'C8', 'A0M'].includes(i.name)).map((i, index) => {
            return <ConsoleButtonGradientRender {...i} />
          })
        }
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {
          'VCDRTGF'.split('').map(i => {
            return <ConsoleButtonGradientRender {...props.media['console.keyboard.json'].find(i_ => i_.name === i)} stay={true} />
          })
        }
        <div style={{ margin: '0 16px' }}>
          {
            props.media['console.keyboard.json'].filter(i => 'Space' === i.name).map((i, index) => {
              return <ConsoleButtonGradientRender {...i} stay={true} />
            })
          }
        </div>
        {
          'JHUIKMN'.split('').map(i => {
            return <ConsoleButtonGradientRender {...props.media['console.keyboard.json'].find(i_ => i_.name === i)} stay={true} />
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
          props.media['console.beat.json'].map((i) => {
            return <ConsoleButtonGradientRender {...i} />
          })
        }
      </div>
      <div style={{ width: 800, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {
          props.media['console.hatsune.json'].map((i) => {
            return <ConsoleButtonGradientRender {...i} />
          })
        }
      </div>
    </div>

  </div>
}

function ConsoleCoreJazzDrum(props) {

  return <div id='console' style={{ position: 'absolute', width: 700, height: 500 }}>

    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      <div>
        {
          props.media['console.jazz-drum.json'].filter(i => i.name === 'Discs').map((i) => {
            return <ConsoleButtonGradientRender {...i} />
          })
        }
      </div>
      <div style={{ width: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {
          props.media['console.jazz-drum.json'].filter(i => i.name === 'Drum').map((i) => {
            return <ConsoleButtonGradientRender {...i} />
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
    name: 'JazzDrum',
    dependencies: ['console.jazz-drum.json'],
    component: ConsoleCoreJazzDrum,
  },
  {
    name: 'Hatsune',
    dependencies: ['console.hatsune.json', 'console.beat.json'],
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
            if (i === 'console.jazz-drum.json') import('../media/console.jazz-drum.json').then(res => resolve({ name: i, source: res.default }))
            if (i === 'console.keyboard.json') import('../media/console.keyboard.json').then(res => resolve({ name: i, source: res.default }))
            if (i === 'console.hatsune.json') import('../media/console.hatsune.json').then(res => resolve({ name: i, source: res.default }))
            if (i === 'console.beat.json') import('../media/console.beat.json').then(res => resolve({ name: i, source: res.default }))
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