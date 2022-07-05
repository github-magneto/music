import React from 'react'

import { MediaButtonBasic } from './Media.Component.Button'

import { keyboard, piano } from '../media/index'

function App() {
  const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

  return <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center' }}>
    <div style={{ width: 'fit-content', height: 'fit-content', display: 'flex' }}>

      <div>
        {
          names.map(name => {
            return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              {
                piano.filter(i => i.name.includes(name) && !i.name.includes('M')).map((i, index) => {
                  return <MediaButtonBasic {...i} />
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
                piano.filter(i => i.name.includes(name) && i.name.includes('M')).map((i, index) => {
                  return <MediaButtonBasic {...i} />
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
          keyboard.filter(i => 'RFVEDCWSX'.includes(i.name)).map((i, index) => {
            return <MediaButtonBasic {...i} stay={true} />
          })
        }
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0 24px' }}>
        {
          keyboard.filter(i => 'Space' === i.name).map((i, index) => {
            return <MediaButtonBasic {...i} stay={true} />
          })
        }
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        {
          keyboard.filter(i => 'IJNOKMPL'.includes(i.name)).map((i, index) => {
            return <MediaButtonBasic {...i} stay={true} />
          })
        }
      </div>
    </div>
  </div>
}

export default App