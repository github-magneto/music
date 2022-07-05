import React from 'react'

import { Tooltip } from '@mui/material'

import Imitation from '../utils/imitation'
import { musicPlay, includesArray, agent } from '../utils/common'

function MediaButtonBasic(props) {
  const { style, name, src, codeInclued, codeMain, codeExclude, stay } = props

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

  const style_ = {
    flexShrink: 0,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.5s all',
    width: Imitation.state.mediaButton.size + 'px',
    height: Imitation.state.mediaButton.size + 'px',
    margin: Imitation.state.mediaButton.margin + 'px',
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

  if (Imitation.state.mediaButton.tooltip) {
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

export { MediaButtonBasic }