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
      <div style={{ fontWeight: 'bold', marginLeft: 24, minWidth: 240 }}>Playground Scale</div>
      <Slider value={Imitation.state.scale} onChange={(e, v) => onChange((value) => value.scale = v)} min={0} max={2} step={0.01} valueLabelDisplay='auto' color='secondary' />
    </Grid>

    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', marginLeft: 24, minWidth: 240 }}>Tooltip</div>
      <Switch checked={Imitation.state.tooltip} onChange={(e) => onChange((value) => value.tooltip = e.target.checked)} color='secondary' />
    </Grid>
  </Grid>
}

function Console() {
  return <List style={{ width: '100%', height: '100%', overflow: 'auto', boxSizing: 'border-box' }}>
    {
      consoleCoreOptions.map(i => {
        return <ListItem disablePadding>
          <ListItemButton onClick={() => Imitation.assignState({ console: i.name })}>
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

    const group = Imitation.state.media
      .filter(i => currentBgmCollection.dependencies.includes(i.name))
      .reduce((t, i) => [...t, ...i.source], [])

    return group
  }, [Imitation.state.bgmCollection, Imitation.state.media])

  return <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Select value={Imitation.state.bgmCollection} onChange={(e) => Imitation.assignState({ bgmCollection: e.target.value, bgm: null })} fullWidth style={{ marginBottom: 12, fontWeight: 'bold' }}>
      {
        bgmCollectionOptions.map(i => <MenuItem key={i.name} value={i.name}>{i.name}</MenuItem>)
      }
    </Select>
    <List style={{ width: '100%', overflow: 'auto', flexGrow: 1 }}>
      {
        currentBgmCollectionOptions.map(i => {
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

function App() {
  const [open, setOpen] = React.useState(false)
  const [tab, setTab] = React.useState('System')
  const [options, setOptions] = React.useState(['System', 'Console', 'BGM'])

  return <>
    <Fab onClick={() => setOpen(true)}><SettingsIcon /></Fab>

    <Dialog open={open} sx={{ '& .MuiDialog-paper': { width: '100%', maxWidth: '1080px', height: '720px', maxHeight: '75vh' } }} onClose={() => setOpen()}>
      <DialogContent dividers>
        <div style={{ display: 'flex', height: '100%' }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} orientation='vertical' style={{ width: 120, flexShrink: 0 }} textColor='inherit' indicatorColor='secondary'>
            {
              options.map((i, index) => {
                return <Tab key={index} value={i} label={i} style={{ fontWeight: 'bold' }}></Tab>
              })
            }
          </Tabs>
          <div style={{ width: 48 }}></div>
          <div style={{ padding: 24, width: '100%', height: '100%', boxSizing: 'border-box' }}>
            {
              tab === 'System' ? <System /> : null
            }
            {
              tab === 'Console' ? <Console /> : null
            }
            {
              tab === 'BGM' ? <BGM /> : null
            }
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </>

}

export default App