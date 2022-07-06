import React from 'react'

import Imitation from '../utils/imitation'

const bgmGroupOptions = [
  {
    name: 'Asphalt',
    dependencies: ['bgm.asphalt.json']
  }
]

function App() {
  const currentBgmGroup = bgmGroupOptions.find(i => i.name === Imitation.state.currentBgmGroup)

  const currentBgm = React.useMemo(() => {
    const need = currentBgmGroup.dependencies.filter(i => !Imitation.state.mediaSource.find(i_ => i_.name === i))
    if (need.length) return

    const group = Imitation.state.mediaSource
      .filter(i => currentBgmGroup.dependencies.includes(i.name))
      .reduce((t, i) => [...t, ...i.source], [])

    const current = group.find(i => i.name === Imitation.state.currentBgm)

    return current
  }, [Imitation.state.currentBgm, Imitation.state.mediaSource])

  React.useEffect(() => {
    const need = currentBgmGroup.dependencies.filter(i => !Imitation.state.mediaSource.find(i_ => i_.name === i))

    if (need.length) {
      Imitation.state.xhrLoading = true
      Imitation.setState(Imitation.state)
      Promise.all(
        need.map(i => {
          return new Promise((resolve) => {
            if (i === 'bgm.asphalt.json') import('../media/bgm.asphalt.json').then(res => resolve({ name: i, source: res.default }))
          })
        })
      ).then(res => {
        Imitation.state.mediaSource = [...Imitation.state.mediaSource, ...res]
        Imitation.state.xhrLoading = false
        Imitation.setState(Imitation.state)
      })
    }
  }, [Imitation.state.currentBgmGroup])

  React.useEffect(() => {
    if (Imitation.state.currentBgm) return

    const need = currentBgmGroup.dependencies.filter(i => !Imitation.state.mediaSource.find(i_ => i_.name === i))
    if (need.length) return

    const group = Imitation.state.mediaSource
      .filter(i => currentBgmGroup.dependencies.includes(i.name))
      .reduce((t, i) => [...t, ...i.source], [])

    Imitation.state.currentBgm = group[0].name
    Imitation.setState(Imitation.state)
  }, [Imitation.state.currentBgmGroup, Imitation.state.mediaSource])

  if (!currentBgm) return null

  return <audio key={currentBgm.src} loop autoPlay controls><source src={currentBgm.src} /></audio>
}

export default App

export { bgmGroupOptions }