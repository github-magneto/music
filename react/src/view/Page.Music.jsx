import React from 'react'

import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { FormControl } from '@mui/material'
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

import Imitation from '../utils/imitation'
import { musicPlay, includesArray, agent } from '../utils/common'

import { piano, asphalt } from '../media/index'

const bgm = [...asphalt]

function MusicButton(props) {
  const { name, src, codeInclued, codeMain, codeExclude } = props

  const ref = React.useRef()

  const [click, setClick] = React.useState(false)

  const onClick = () => {
    musicPlay(src)
    setClick(true)
    if (ref.current) clearTimeout(ref.current)
    ref.current = setTimeout(() => { setClick(false); ref.current = null }, 500)
  }

  const style = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.5s all',
    width: 80,
    height: 80,
    margin: 16,
    borderRadius: 12,
    fontWeight: 'bold',
    position: 'relative',
    fontSize: 12,
    boxShadow: '0 4px 8px gray',
    background: click ? 'gray' : 'white',
  }

  React.useEffect(() => {
    if (codeMain && codeMain.length !== 0 && !codeMain.includes(Imitation.state.pressKeep[Imitation.state.pressKeep.length - 1])) return
    if (!codeInclued.some(i => includesArray(i, Imitation.state.pressKeep))) return
    if (codeExclude && codeExclude.length !== 0 && includesArray(codeExclude, Imitation.state.pressKeep)) return

    onClick()
  }, [Imitation.state.pressUpdate])

  return <Tooltip title={codeInclued.map(i => <div>{i.join(' + ')}</div>)}>
    <div style={style} onClick={agent() === 'pc' ? onClick : undefined} onTouchStart={agent() === 'phone' ? onClick : undefined}>
      <div>{name ? name : ''}</div>
    </div>
  </Tooltip>
}

function MusicButtonList(props) {
  const { list } = props

  return <div style={{ maxWidth: 'none', width: 'fit-content', height: 'fit-content', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
    {
      list.map((i, index) => {
        return <MusicButton {...i} />
      })
    }
  </div>

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

    <audio key={currentBGM.src} loop autoPlay controls style={{ flexGrow: 1 }}>
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

  return <Dialog open={true} sx={{ '& .MuiDialog-paper': { width: '100%', maxWidth: '720px' } }} onClose={onClose}>
    <DialogTitle>Tool</DialogTitle>

    <DialogContent dividers>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ fontWeight: 'bold' }}>pressMode</div>
        <div>
          <Button variant={Imitation.state.pressMode === 'includes' ? 'contained' : 'outlined'} onClick={() => Imitation.assignState({ pressMode: 'includes' })}>includes</Button>
          <Button variant={Imitation.state.pressMode === 'same' ? 'contained' : 'outlined'} onClick={() => Imitation.assignState({ pressMode: 'same' })}>same</Button>
        </div>
      </div>
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

  return <div style={{ width: '100%', height: '100%', padding: 24, boxSizing: 'border-box' }}>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
      <Tool />
      <BGM />
    </div>

    <MusicButtonList list={piano} />

  </div>
}

export default Imitation.withBindRender(App)