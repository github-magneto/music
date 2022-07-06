import React from 'react'

import { Tooltip } from '@mui/material'

import { musicPlay, includesArray, agent } from '../utils/common'
import Imitation from '../utils/imitation'

function ConsoleButtonBox(Component) {

  return function ConsoleButton(props) {
    const { name, src, codeInclued, codeMain, codeExclude, stay } = props

    const ref = React.useRef()

    const [click, setClick] = React.useState(false)

    const onClick = () => {
      musicPlay(src)
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
      if (!codeInclued.some(i => includesArray(i, Imitation.state.pressKeep))) return
      if (codeExclude && codeExclude.length !== 0 && includesArray(codeExclude, Imitation.state.pressKeep)) return

      onClick()
    }, [Imitation.state.pressUpdate])

    const p = { ...props, clicking, onClick }

    return <Component {...p} />
  }

}

function ConsoleButtonTooltip(props) {
  return Imitation.state.tooltip ? <Tooltip {...props} /> : props.children
}

function ConsoleButtonBasic(props) {
  const { name, codeInclued, clicking, onClick } = props

  const style = React.useMemo(() => {
    return {
      flexShrink: 0,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: '0.5s all',
      width: 64,
      height: 64,
      margin: 8,
      borderRadius: 12,
      fontWeight: 'bold',
      position: 'relative',
      fontSize: 12,
      boxShadow: '0 4px 8px gray',
      background: clicking ? 'gray' : 'white',
    }
  }, [clicking])


  return <ConsoleButtonTooltip title={codeInclued.map(i => <div>{i.join(' + ')}</div>)}>
    <div style={style} onMouseDown={agent() === 'pc' ? onClick : undefined} onTouchStart={agent() === 'phone' ? onClick : undefined}>
      <div>{name ? name : ''}</div>
    </div>
  </ConsoleButtonTooltip>
}

function ConsoleButtonGradient(props) {
  const { name, codeInclued, clicking, onClick } = props

  const style = React.useMemo(() => {
    return {
      flexShrink: 0,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: '0.5s all',
      width: 64,
      height: 64,
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

  return <ConsoleButtonTooltip title={codeInclued.map(i => <div>{i.join(' + ')}</div>)}>
    <div>
      <div style={style} onMouseDown={agent() === 'pc' ? onClick : undefined} onTouchStart={agent() === 'phone' ? onClick : undefined}>
        <div>{name ? name : ''}</div>
      </div>
    </div>
  </ConsoleButtonTooltip>
}

const ConsoleButtonBasicRender = ConsoleButtonBox(ConsoleButtonBasic)
const ConsoleButtonGradientRender = ConsoleButtonBox(ConsoleButtonGradient)

function ConsoleCorePiano(props) {
  const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

  return <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center' }}>
    <div style={{ width: 'fit-content', height: 'fit-content', display: 'flex' }}>

      <div>
        {
          names.map(name => {
            return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              {
                props.media['console.piano.json'].filter(i => i.name.includes(name) && !i.name.includes('M')).map((i, index) => {
                  return <ConsoleButtonGradientRender {...i} />
                })
              }
            </div>
          })
        }
      </div>

      <div style={{ width: 48 }}></div>

      <div>
        {
          names.map(name => {
            return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              {
                props.media['console.piano.json'].filter(i => i.name.includes(name) && i.name.includes('M')).map((i, index) => {
                  return <ConsoleButtonGradientRender {...i} />
                })
              }
            </div>
          })
        }
      </div>

    </div>

    <div style={{ width: '100%', height: 48 }}></div>

    <div style={{ width: 'fit-content', height: 'fit-content', display: 'flex' }}>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {
          props.media['console.keyboard.json'].filter(i => 'RFVEDCWSX'.includes(i.name)).map((i, index) => {
            return <ConsoleButtonGradientRender {...i} stay={true} />
          })
        }
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0 24px' }}>
        {
          props.media['console.keyboard.json'].filter(i => 'Space' === i.name).map((i, index) => {
            return <ConsoleButtonGradientRender {...i} stay={true} />
          })
        }
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {
          props.media['console.keyboard.json'].filter(i => 'IJNOKMPL'.includes(i.name)).map((i, index) => {
            return <ConsoleButtonGradientRender {...i} stay={true} />
          })
        }
      </div>
    </div>
  </div>
}

function ConsoleCoreHatsune(props) {
  const indexList = [[0, 5], [6, 11], [12, 17], [18, 23], [24, 29]]

  return <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center' }}>
    {
      indexList.map(index => {
        return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {
            props.media['console.hatsune.json'].filter((i, index_) => index_ >= index[0] && index_ <= index[1]).map((i) => {
              return <ConsoleButtonGradientRender {...i} />
            })
          }
        </div>
      })
    }
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
  const currentConsole = consoleCoreOptions.find(i => i.name === Imitation.state.console)

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

  const currentMedia = React.useMemo(() => {
    const need = currentConsole.dependencies.filter(i => !Imitation.state.media.find(i_ => i_.name === i))
    if (need.length) return

    const r = {}
    currentConsole.dependencies.forEach(i => r[i] = Imitation.state.media.find(i_ => i_.name === i).source)
    return r
  }, [Imitation.state.console, Imitation.state.media])

  return currentMedia ? <currentConsole.component media={currentMedia} /> : null
}

export default App