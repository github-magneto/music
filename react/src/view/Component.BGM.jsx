import React from 'react'

import Imitation from '../utils/imitation'

const bgmCollectionOptions = [
  {
    name: 'Asphalt',
    dependencies: ['bgm.asphalt.json']
  },
  {
    name: 'Warcraft',
    dependencies: ['bgm.warcraft.json']
  },
  {
    name: 'JOJO',
    dependencies: ['bgm.jojo.json']
  },
]

function App() {
  const currentBgmCollection = React.useMemo(() => {
    return bgmCollectionOptions.find(i => i.name === Imitation.state.bgmCollection)
  }, [Imitation.state.bgmCollection])

  const currentBgm = React.useMemo(() => {
    const need = currentBgmCollection.dependencies.filter(i => !Imitation.state.media.find(i_ => i_.name === i))

    if (need.length) return

    const group = Imitation.state.media
      .filter(i => currentBgmCollection.dependencies.includes(i.name))
      .reduce((t, i) => [...t, ...i.source], [])

    const current = group.find(i => i.name === Imitation.state.bgm)

    return current
  }, [Imitation.state.bgm, Imitation.state.media])

  React.useEffect(() => {
    const need = currentBgmCollection.dependencies.filter(i => !Imitation.state.media.find(i_ => i_.name === i))

    if (need.length) {
      Imitation.state.xhrLoading = true
      Imitation.setState(Imitation.state)
      Promise.all(
        need.map(i => {
          return new Promise((resolve) => {
            if (i === 'bgm.asphalt.json') import('../media/bgm.asphalt.json').then(res => resolve({ name: i, source: res.default }))
            if (i === 'bgm.warcraft.json') import('../media/bgm.warcraft.json').then(res => resolve({ name: i, source: res.default }))
            if (i === 'bgm.jojo.json') import('../media/bgm.jojo.json').then(res => resolve({ name: i, source: res.default }))
          })
        })
      ).then(res => {
        Imitation.state.media = [...Imitation.state.media, ...res]
        Imitation.state.xhrLoading = false
        Imitation.setState(Imitation.state)
      })
    }
  }, [Imitation.state.bgmCollection])

  // React.useEffect(() => {
  //   if (Imitation.state.bgm) return

  //   const need = currentBgmCollection.dependencies.filter(i => !Imitation.state.media.find(i_ => i_.name === i))
  //   if (need.length) return

  //   const group = Imitation.state.media
  //     .filter(i => currentBgmCollection.dependencies.includes(i.name))
  //     .reduce((t, i) => [...t, ...i.source], [])

  //   Imitation.state.bgm = group[0].name
  //   Imitation.setState(Imitation.state)
  // }, [Imitation.state.bgmCollection, Imitation.state.media])

  if (!currentBgm) return null

  return <audio key={currentBgm.src} loop autoPlay controls style={{ width: '100%', opacity: 0.5 }}><source src={currentBgm.src} /></audio>
}

export default App

export { bgmCollectionOptions }