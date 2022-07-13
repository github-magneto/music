import React from 'react'

import Imitation from '../utils/imitation'

const requestAnimationFrame = (draw, time) => {
  var time_ = 0

  const event = () => {
    if (time === time_) return
    draw()
    time_ = time_ + 1
    window.requestAnimationFrame(event)
  }

  event()
}

const create = (context) => {
  return {
    line: () => {
      var x = 0
      var y = 0
      context.clearRect(0, 0, canvas.width, canvas.height)
      var context = canvas.getContext('2d')
      context.fillStyle = "#FF0000"
      context.fillRect(x, y, 150, 75)
    }
  }
}

function App() {
  const ref = React.useRef()

  React.useEffect(() => {
    requestAnimationFrame(create(ref.current.getContext('2d')).line, 30)
  }, [Imitation.state.pressKeep])

  return <canvas style={{ width: '100%', height: '100%' }} ref={el => ref.current = el} />
}

export default App