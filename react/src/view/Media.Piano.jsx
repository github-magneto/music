function App(props) {
  const { components, media } = props

  const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

  return <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: 'fit-content', height: 'fit-content', display: 'flex' }}>

      <div>
        {
          names.map(name => {
            return <>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                {
                  media.filter(i => i.name.includes(name) && !i.name.includes('M')).map((i, index) => {
                    return <components.MusicButton {...i} />
                  })
                }
              </div>
            </>
          })
        }
      </div>

      <div style={{ width: 48 }}></div>

      <div>
        {
          names.map(name => {
            return <>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                {
                  media.filter(i => i.name.includes(name) && i.name.includes('M')).map((i, index) => {
                    return <components.MusicButton {...i} />
                  })
                }
              </div>
            </>
          })
        }
      </div>

    </div>
  </div>
}

export default App