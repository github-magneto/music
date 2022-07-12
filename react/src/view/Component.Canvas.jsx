import React from 'react'

import Imitation from '../utils/imitation'

function App() {
  const ref = React.useRef()

  const create = {
    line: () => {
      var context = document.getElementsByTagName('canvas')[0].getContext('2d')
      context.fillStyle = "#FF0000"
      context.rect(0, 0, 150, 75)
      context.fill()
    }
  }

  React.useEffect(() => {
    create.line()
  }, [Imitation.state.pressKeep])

  return <canvas style={{ width: '100%', height: '100%' }} ref={el => ref.current = el} />
}

export default App