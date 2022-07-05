import React from 'react'

import { Tooltip } from '@mui/material'

import Imitation from '../utils/imitation'
import { musicPlay, includesArray, agent } from '../utils/common'

function Basic(props) {
  const { style, name, src, codeInclued, codeMain, codeExclude, stay } = props

  const ref = React.useRef()

  const [click, setClick] = React.useState(false)

  const onClick = () => {
    try {
      musicPlay(src)
    } catch { }
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

  const style_ = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.5s all',
    width: Imitation.state.musicButton.size + 'px',
    height: Imitation.state.musicButton.size + 'px',
    margin: Imitation.state.musicButton.margin + 'px',
    borderRadius: 12,
    fontWeight: 'bold',
    position: 'relative',
    fontSize: 12,
    boxShadow: '0 4px 8px gray',
    background: clicking ? 'gray' : 'white',
    ...style
  }

  React.useEffect(() => {
    if (codeMain && codeMain.length !== 0 && !codeMain.includes(Imitation.state.pressKeep[Imitation.state.pressKeep.length - 1])) return
    if (!codeInclued.some(i => includesArray(i, Imitation.state.pressKeep))) return
    if (codeExclude && codeExclude.length !== 0 && includesArray(codeExclude, Imitation.state.pressKeep)) return

    onClick()
  }, [Imitation.state.pressUpdate])

  if (Imitation.state.musicButton.tooltip) {
    return <Tooltip title={codeInclued.map(i => <div>{i.join(' + ')}</div>)}>
      <div style={style_} onMouseDown={agent() === 'pc' ? onClick : undefined} onTouchStart={agent() === 'phone' ? onClick : undefined}>
        <div>{name ? name : ''}</div>
      </div>
    </Tooltip>
  } else {
    return <div style={style_} onMouseDown={agent() === 'pc' ? onClick : undefined} onTouchStart={agent() === 'phone' ? onClick : undefined}>
      <div>{name ? name : ''}</div>
    </div>
  }
}

export { Basic }