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
import { TableContainer } from '@mui/material'
import { Table } from '@mui/material'
import { TableHead } from '@mui/material'
import { TableRow } from '@mui/material'
import { TableCell } from '@mui/material'
import { TableBody } from '@mui/material'
import { Grid } from '@mui/material'

import { base64Audio, downloadFile, copy, musicPlay, includesArray, agent } from '../utils/common'
import Imitation from '../utils/imitation'

import { piano } from '../media/index'


function App() {
  const [list, setList] = React.useState(piano)

  const onClick = () => {
    const r = JSON.stringify(list)
    copy(r, () => Imitation.assignState({ message: r.length }))
  }

  return <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto', width: 'fit-content', height: 'fit-content' }}>

    <Button variant='contained' onClick={onClick} style={{ marginBottom: 24 }}>Save</Button>

    <TableContainer style={{ height: 720 }} component={Paper}>
      <Table stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>codeInclued</TableCell>
            <TableCell>codeExclude</TableCell>
            <TableCell>codeMain</TableCell>
            {/* <TableCell>src</TableCell> */}
            <TableCell>url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            list.map((i, index) => {
              return <TableRow key={index}>
                <TableCell>
                  <TextField defaultValue={i.name} onBlur={e => setList(pre => { pre[index].name = e.target.value; return pre })} />
                </TableCell>
                <TableCell>
                  <TextField defaultValue={JSON.stringify(i.codeInclued)} onBlur={e => setList(pre => { pre[index].codeInclued = JSON.parse(e.target.value); return pre })} />
                </TableCell>
                <TableCell>
                  <TextField defaultValue={JSON.stringify(i.codeExclude)} onBlur={e => setList(pre => { pre[index].codeExclude = JSON.parse(e.target.value); return pre })} />
                </TableCell>
                <TableCell>
                  <TextField defaultValue={JSON.stringify(i.codeMain)} onBlur={e => setList(pre => { pre[index].codeMain = JSON.parse(e.target.value); return pre })} />
                </TableCell>
                {/* <TableCell>
                  <TextField defaultValue={i.src} onBlur={e => setList(pre => { pre[index].src = e.target.value; return pre })} />
                </TableCell> */}
                <TableCell>
                  <TextField defaultValue={i.url} onBlur={e => setList(pre => { pre[index].url = e.target.value; return pre })} />
                </TableCell>
              </TableRow>
            })
          }
        </TableBody>
      </Table>
    </TableContainer>


  </div>
}

export default App