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
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { FormControl } from '@mui/material'
import { Select } from '@mui/material'

import SettingsIcon from '@mui/icons-material/Settings'

import { consoleButtonOptions, consoleCoreOptions } from './Component.Console'
import { bgmGroupOptions } from './Component.BGM'

import Imitation from '../utils/imitation'

function System() {
  const onChange = fn => {
    fn(Imitation.state)
    Imitation.setState(Imitation.state)
  }

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <div>Playground Scale</div>
      <Slider value={Imitation.state.scale} onChange={(e, v) => onChange((value) => value.scale = v)} min={0} max={2} step={0.01} valueLabelDisplay='auto' />
    </Grid>
    <Grid item xs={12}>
      <div>Button Size</div>
      <Slider value={Imitation.state.consoleButton.size} onChange={(e, v) => onChange((value) => value.consoleButton.size = v)} min={40} max={100} step={1} valueLabelDisplay='auto' />
    </Grid>
    <Grid item xs={12}>
      <div>Button Space</div>
      <Slider value={Imitation.state.consoleButton.margin} onChange={(e, v) => onChange((value) => value.consoleButton.margin = v)} min={0} max={24} step={1} valueLabelDisplay='auto' />
    </Grid>
    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>Button Tooltip</div>
      <Switch checked={Imitation.state.consoleButton.tooltip} onChange={(e) => onChange((value) => value.consoleButton.tooltip = e.target.checked)} />
    </Grid>
    <Grid item xs={12}>
      <div>Button FeedBack</div>
      {
        consoleButtonOptions.map(i => <Button variant={Imitation.state.currentConsoleButton === i.name ? 'contained' : 'text'} style={{ margin: 12 }} onClick={() => onChange(v => v.currentConsoleButton = i.name)}>{i.name}</Button>)
      }
    </Grid>
  </Grid>
}

function Console() {
  return <List style={{ width: '100%', maxHeight: 600, overflow: 'auto' }} component={Paper}>
    {
      consoleCoreOptions.map(i => {
        return <ListItem>
          <ListItemButton onClick={() => Imitation.assignState({ currentConsoleCore: i.name })}>
            <ListItemText sx={{ '& .MuiTypography-root': { fontWeight: 'bold' } }}>{i.name}</ListItemText>
          </ListItemButton>
        </ListItem>
      })
    }
  </List>
}

function BGM() {
  const onChangeBgmGroup = e => {
    Imitation.assignState({ currentBgmGroup: e.target.value, })
  }

  const onChangeBgm = e => {
    Imitation.assignState({ currentBgm: e.target.value })
  }

  const currentBgmGroupOptions = React.useMemo(() => {
    const currentBgmGroup = bgmGroupOptions.find(i => i.name === Imitation.state.currentBgmGroup)

    const group = Imitation.state.mediaSource
      .filter(i => currentBgmGroup.dependencies.includes(i.name))
      .reduce((t, i) => [...t, ...i.source], [])

    return group
  }, [Imitation.state.currentBgmGroup, Imitation.state.mediaSource])

  return <div style={{ width: '100%' }}>
    <FormControl fullWidth style={{ marginBottom: 24 }}>
      <InputLabel>Bgm Group</InputLabel>
      <Select label='Bgm Group' value={Imitation.state.currentBgmGroup} onChange={onChangeBgmGroup}>
        {
          bgmGroupOptions.map(i => <MenuItem key={i.name} value={i.name}>{i.name}</MenuItem>)
        }
      </Select>
    </FormControl>
    <FormControl fullWidth>
      <InputLabel>Bgm</InputLabel>
      <Select label='Bgm' value={Imitation.state.currentBgm} onChange={onChangeBgm}  >
        {
          currentBgmGroupOptions.map(i => <MenuItem key={i.name} value={i.name}>{i.name}</MenuItem>)
        }
      </Select>
    </FormControl>
  </div>
}

function App(props) {
  const { onClose } = props

  const [open, setOpen] = React.useState(false)
  const [tab, setTab] = React.useState('System')
  const [options, setOptions] = React.useState(['System', 'Console', 'BGM'])

  return <>
    <Fab onClick={() => setOpen(true)}><SettingsIcon /></Fab>

    <Dialog open={open} sx={{ '& .MuiDialog-paper': { width: '100%', maxWidth: '1080px' } }} onClose={() => setOpen()}>
      <DialogTitle>Tool</DialogTitle>

      <DialogContent dividers>
        <div style={{ display: 'flex' }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} orientation='vertical' style={{ width: 120, flexShrink: 0 }}>
            {
              options.map((i, index) => {
                return <Tab key={index} value={i} label={i}></Tab>
              })
            }
          </Tabs>
          <div style={{ width: 48 }}></div>
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

      </DialogContent>
    </Dialog>
  </>

}

export default App