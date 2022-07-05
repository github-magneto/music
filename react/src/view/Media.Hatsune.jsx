import React from 'react'

import { MediaButtonBasic } from './Media.Component.Button'

import { hatsune } from '../media/index'

function App() {

  const indexList = [[0, 5], [6, 11], [12, 17], [18, 23], [24, 29]]

  return <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', alignContent: 'center' }}>

    {
      indexList.map(index => {
        return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {
            hatsune.filter((i, index_) => index_ >= index[0] && index_ <= index[1]).map((i) => {
              return <MediaButtonBasic {...i} />
            })
          }
        </div>
      })
    }

  </div>
}

export default App