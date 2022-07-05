import React from 'react'

import { Button } from '@mui/material'
import { TextField } from '@mui/material'

import { base64Audio, downloadFile, copy, musicPlay, includesArray, agent } from '../utils/common'
import Imitation from '../utils/imitation'

function Item() {
  const [text, setText] = React.useState('')

  const onChange = (e) => {
    const callback = (v) => {
      setText(v)
      copy(v, () => Imitation.assignState({ message: v.length }))
    }
    base64Audio(e.target.files[0], callback)
  }

  const [url, setUrl] = React.useState('')
  const onClick = () => {
    fetch(url).then(res => {
      res.blob().then(res => {
        const callback = (v) => {
          setText(v)
          copy(v, () => Imitation.assignState({ message: v.length }))
        }
        base64Audio(res, callback)
      })
    })
  }

  return <div style={{ margin: 24, display: 'flex', alignItems: 'center' }}>
    <label>
      <input type='file' onChange={onChange} style={{ display: 'none' }} />
      <Button component='div' variant='contained' style={{ marginRight: 24 }}>File</Button>
    </label>

    <TextField value={url} onChange={e => setUrl(e.target.value)} size='small' style={{ width: 400 }} />
    <Button variant='contained' style={{ marginRight: 24 }} onClick={onClick}>Url</Button>

    <TextField value={text} size='small' style={{ width: 400 }} />
  </div>
}

function Many() {
  const [text, setText] = React.useState('')

  const handle = async (i) => {
    const res = await fetch(i.url)
    const res_ = await res.blob()
    await new Promise((r) => {
      const callback = (v) => {
        i.src = v
        r()
      }
      base64Audio(res_, callback)
    })
  }

  const onClick = async () => {
    const l = JSON.parse(text)

    for (let index = 0; index < l.length; index++) {
      const element = l[index]

      await handle(element)
    }

    const r = JSON.stringify(l)

    copy(r, () => Imitation.assignState({ message: r.length }))
  }

  return <div style={{ margin: 24, display: 'flex', alignItems: 'center' }}>
    <TextField value={text} onChange={e => setText(e.target.value)} fullWidth size='small' />
    <Button variant='contained' style={{ marginRight: 24 }} onClick={onClick}>Many</Button>
  </div>
}

function App() {
  return <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto', width: 'fit-content', height: 'fit-content' }}>
    <Many />

    {
      new Array(8).fill().map(i => <Item />)
    }
  </div>
}

export default App