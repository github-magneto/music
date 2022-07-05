import React from 'react'

import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { Slider } from '@mui/material'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select } from '@mui/material'
import { Tooltip } from '@mui/material'
import { Paper } from '@mui/material'
import { Dialog } from '@mui/material'
import { DialogTitle } from '@mui/material'
import { DialogContent } from '@mui/material'
import { DialogActions } from '@mui/material'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { ListItemButton } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import { ListItemText } from '@mui/material'
import { IconButton } from '@mui/material'
import { Grid } from '@mui/material'

import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

import MediaPiano from './Media.Piano'

import Imitation from '../utils/imitation'
import { musicPlay, includesArray, agent } from '../utils/common'

import { piano, asphalt } from '../media/index'

const bgm = [...asphalt]

function MusicButton(props) {
  const { style, name, src, codeInclued, codeMain, codeExclude } = props

  const ref = React.useRef()

  const [click, setClick] = React.useState(false)

  const onClick = () => {
    musicPlay(src)
    setClick(true)
    if (ref.current) clearTimeout(ref.current)
    ref.current = setTimeout(() => { setClick(false); ref.current = null }, 500)
  }

  const style_ = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.5s all',
    width: Imitation.state.musicButtonStyle.size + 'px',
    height: Imitation.state.musicButtonStyle.size + 'px',
    margin: Imitation.state.musicButtonStyle.margin + 'px',
    borderRadius: 12,
    fontWeight: 'bold',
    position: 'relative',
    fontSize: 12,
    boxShadow: '0 4px 8px gray',
    background: click ? 'gray' : 'white',
    ...style
  }

  React.useEffect(() => {
    if (codeMain && codeMain.length !== 0 && !codeMain.includes(Imitation.state.pressKeep[Imitation.state.pressKeep.length - 1])) return
    if (!codeInclued.some(i => includesArray(i, Imitation.state.pressKeep))) return
    if (codeExclude && codeExclude.length !== 0 && includesArray(codeExclude, Imitation.state.pressKeep)) return

    onClick()
  }, [Imitation.state.pressUpdate])

  return <Tooltip title={codeInclued.map(i => <div>{i.join(' + ')}</div>)}>
    <div style={style_} onClick={agent() === 'pc' ? onClick : undefined} onTouchStart={agent() === 'phone' ? onClick : undefined}>
      <div>{name ? name : ''}</div>
    </div>
  </Tooltip>
}

function ModalBGM(props) {
  const { onClose, onClick } = props

  const [input, setInput] = React.useState('')

  const handleClick = (v) => {
    onClick(v)
    onClose()
  }

  return <Dialog open={true} sx={{ '& .MuiDialog-paper': { width: '100%', maxWidth: '720px' } }} onClose={onClose}>
    <DialogTitle>BGM</DialogTitle>

    <DialogContent dividers>
      <div style={{ position: 'relative', marginBottom: 12 }}>
        <TextField fullWidth value={input} onChange={e => setInput(e.target.value)} label='Input...' />
        <IconButton onClick={() => handleAdd(input)} style={{ position: 'absolute', right: 12, top: 0, bottom: 0, margin: 'auto', width: 'fit-content', height: 'fit-content' }}><SendOutlinedIcon /></IconButton>
      </div>

      <List style={{ maxHeight: 600, overflow: 'auto' }} component={Paper}>
        {
          bgm.map(i => {
            return <ListItem>
              <ListItemButton onClick={() => handleClick(i)}>
                <ListItemText sx={{ '& .MuiTypography-root': { fontWeight: 'bold' } }}>{i.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          })
        }
      </List>
    </DialogContent>
  </Dialog>
}

function BGM() {
  const [currentBGM, setCurrentBGM] = React.useState(bgm[0])

  const [modal, setModal] = React.useState()

  return <div style={{ display: 'flex', alignItems: 'center' }}>

    <audio key={currentBGM.src} loop autoPlay controls style={{ flexGrow: 1, height: 36 }}>
      <source src={currentBGM.src} />
    </audio>

    <Button color='inherit' onClick={() => setModal(true)}>BGM</Button>

    {
      modal ? <ModalBGM onClick={setCurrentBGM} onClose={() => setModal()} /> : null
    }

  </div>
}

function ModalTool(props) {
  const { onClose } = props

  const onChange = fn => {
    fn(Imitation.state)
    Imitation.setState(Imitation.state)
  }

  return <Dialog open={true} sx={{ '& .MuiDialog-paper': { width: '100%', maxWidth: '720px' } }} onClose={onClose}>
    <DialogTitle>Tool</DialogTitle>

    <DialogContent dividers>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>Playground Saale</div>
          <Slider value={Imitation.state.scale} onChange={(e, v) => onChange((value) => value.scale = v)} min={0} max={2} step={0.01} valueLabelDisplay='auto' />
        </Grid>
        <Grid item xs={12}>
          <div>Button Size</div>
          <Slider value={Imitation.state.musicButtonStyle.size} onChange={(e, v) => onChange((value) => value.musicButtonStyle.size = v)} min={40} max={100} step={1} valueLabelDisplay='auto' />
        </Grid>
        <Grid item xs={12}>
          <div>Button Space</div>
          <Slider value={Imitation.state.musicButtonStyle.margin} onChange={(e, v) => onChange((value) => value.musicButtonStyle.margin = v)} min={0} max={24} step={1} valueLabelDisplay='auto' />
        </Grid>
      </Grid>
    </DialogContent>
  </Dialog>
}

function Tool() {
  const [modal, setModal] = React.useState()

  return <div style={{ display: 'flex', alignItems: 'center' }}>

    <Button color='inherit' onClick={() => setModal(true)}>Tool</Button>

    {
      modal ? <ModalTool onClose={() => setModal()} /> : null
    }

  </div>
}

function App() {

  React.useEffect(() => {
    const event = (e) => {
      Imitation.state.pressKeep = Imitation.state.pressKeep.includes(e.code) ? Imitation.state.pressKeep : [...Imitation.state.pressKeep, e.code]
      Imitation.state.pressUpdate = Imitation.state.pressUpdate + 1
      Imitation.setState(Imitation.state)
    }
    const event_ = (e) => {
      Imitation.state.pressKeep = Imitation.state.pressKeep.filter(i => !i.includes(e.code))
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
        <MediaPiano components={{ MusicButton }} media={piano} />
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', right: 12, bottom: 12, position: 'absolute', zIndex: 1, background: 'white' }}>
      <BGM />
      <Tool />
    </div>

  </div>
}

export default Imitation.withBindRender(App)