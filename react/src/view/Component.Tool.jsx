import React from 'react'

import { Button } from '@mui/material'
import { Fab } from '@mui/material'
import { Slider } from '@mui/material'
import { Switch } from '@mui/material'
import { Paper } from '@mui/material'
import { Dialog } from '@mui/material'
import { DialogTitle } from '@mui/material'
import { DialogContent } from '@mui/material'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { ListItemButton } from '@mui/material'
import { ListItemText } from '@mui/material'
import { Grid } from '@mui/material'
import { Tabs } from '@mui/material'
import { Tab } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select } from '@mui/material'

import SettingsIcon from '@mui/icons-material/Settings'

import { consoleCoreOptions } from './Component.Console'
import { bgmCollectionOptions } from './Component.BGM'

import Imitation from '../utils/imitation'

function System() {
  const onChange = fn => {
    fn(Imitation.state)
    Imitation.setState(Imitation.state)
  }

  return <Grid container spacing={2} alignContent='flex-start'>
    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', marginLeft: 24, minWidth: 100 }}>Scale</div>
      <Slider value={Imitation.state.scale} onChange={(e, v) => onChange((value) => value.scale = v)} min={0} max={2} step={0.01} valueLabelDisplay='auto' color='secondary' />
    </Grid>

    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', marginLeft: 24, minWidth: 100 }}>Tooltip</div>
      <Switch checked={Imitation.state.tooltip} onChange={(e) => onChange((value) => value.tooltip = e.target.checked)} color='secondary' />
    </Grid>

    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', marginLeft: 24, minWidth: 100 }}>Cover</div>
      <Switch checked={Imitation.state.cover} onChange={(e) => onChange((value) => value.cover = e.target.checked)} color='secondary' />
    </Grid>

    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', marginLeft: 24, minWidth: 100 }}>Volume</div>
      <Slider value={Imitation.state.volume} onChange={(e, v) => onChange((value) => value.volume = v)} min={0} max={1} step={0.01} valueLabelDisplay='auto' color='secondary' />
    </Grid>
  </Grid>
}

function Console(props) {
  return <List style={{ width: '100%', height: '100%', overflow: 'auto', boxSizing: 'border-box' }}>
    {
      consoleCoreOptions.map(i => {
        return <ListItem disablePadding>
          <ListItemButton onClick={() => { Imitation.assignState({ console: i.name }); props.onClose() }}>
            <ListItemText sx={{ '& .MuiTypography-root': { fontWeight: 'bold' } }}>{i.name}</ListItemText>
          </ListItemButton>
        </ListItem>
      })
    }
  </List>
}

function BGM() {
  const currentBgmCollectionOptions = React.useMemo(() => {
    const currentBgmCollection = bgmCollectionOptions.find(i => i.name === Imitation.state.bgmCollection)

    if (!currentBgmCollection) return

    const group = Imitation.state.media
      .filter(i => currentBgmCollection.dependencies.includes(i.name))
      .reduce((t, i) => [...t, ...i.source], [])

    return group
  }, [Imitation.state.bgmCollection, Imitation.state.media])

  return <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Select value={Imitation.state.bgmCollection} onChange={(e) => Imitation.assignState({ bgmCollection: e.target.value, bgm: null })} fullWidth style={{ marginBottom: 12, fontWeight: 'bold' }} color='secondary'>
      {
        bgmCollectionOptions.map(i => <MenuItem key={i.name} value={i.name} style={{ fontWeight: 'bold' }}>{i.name}</MenuItem>)
      }
    </Select>
    <List style={{ width: '100%', overflow: 'auto', flexGrow: 1 }}>
      {
        currentBgmCollectionOptions && currentBgmCollectionOptions.map(i => {
          return <ListItem disablePadding>
            <ListItemButton onClick={() => Imitation.assignState({ bgm: i.name })}>
              <ListItemText sx={{ '& .MuiTypography-root': { fontWeight: 'bold' } }}>{i.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        })
      }
    </List>
  </div>
}

function Help() {
  return <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
    <div style={{ fontWeight: 'bold', lineHeight: 1.5 }}>
      If you are in phone, you can not use comfortably.
      <br />
      You should change to computer or ipad.
      <br />
      <br />
      If you are in computer or ipad, and console buttons are outside the screen.
      <br />
      You can switch to 'System' in left bar, and action in 'Scale' to control the scale.
      <br />
      <br />
      If you are in computer, and console buttons are outside the screen.
      <br />
      You can press 'Control' and '-' to shrink screen.
    </div>
  </div>
}

function App() {
  const [open, setOpen] = React.useState(false)
  const [tab, setTab] = React.useState('System')
  const [options, setOptions] = React.useState(['System', 'Console', 'BGM', 'Help'])

  const onClose = () => {
    setOpen()
  }

  return <>
    <Fab color='secondary' onClick={() => setOpen(true)}><SettingsIcon /></Fab>

    <Dialog open={open} sx={{ '& .MuiDialog-paper': { width: '100%', maxWidth: '1080px', height: '720px', maxHeight: Imitation.state.screenHeight - 200 } }} onClose={onClose}>
      <DialogContent dividers>
        <div style={{ display: 'flex', height: '100%', flexDirection: Imitation.state.screenWidth > 720 ? 'row' : 'column' }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} orientation={Imitation.state.screenWidth > 720 ? 'vertical' : 'horizontal'} style={{ width: Imitation.state.screenWidth > 720 ? 120 : '100%', flexShrink: 0 }} textColor='inherit' indicatorColor='secondary' variant='scrollable'>
            {
              options.map((i, index) => {
                return <Tab key={index} value={i} label={i} style={{ fontWeight: 'bold' }}></Tab>
              })
            }
          </Tabs>
          <div style={{ padding: Imitation.state.screenWidth > 720 ? 24 : '12px 0', width: Imitation.state.screenWidth > 720 ? 0 : '100%', height: Imitation.state.screenWidth > 720 ? '100%' : 0, boxSizing: 'border-box', flexGrow: 1 }}>
            {
              tab === 'System' ? <System onClose={onClose} /> : null
            }
            {
              tab === 'Console' ? <Console onClose={onClose} /> : null
            }
            {
              tab === 'BGM' ? <BGM onClose={onClose} /> : null
            }
            {
              tab === 'Help' ? <Help onClose={onClose} /> : null
            }
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </>

}

export default App