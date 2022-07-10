const fs = require('fs')
const path = require('path')

const elements = () => {
  const r = []

  const list = document.querySelectorAll('.SoundBox.oh.pr')

  list.forEach(i => {
    const name = i.querySelector('.SoundTitle a').innerHTML
    const url = i.querySelector('source').src
    r.push({ name, url })
  })

  console.log(JSON.stringify(r))

  return r
}

const parseUrl = async (list) => {
  for (let index = 0; index < list.length; index++) {
    const element = list[index]

    const res = await fetch(element.url)

    const res_ = await res.blob()

    const src = await new Promise((resolve) => {
      new FileReader().readAsDataURL(res_)
      reader.onload = () => resolve(reader.result)
    })

    element.src = src
  }
}

const run = async () => {
  const pathname = '../media/console.piano.json'
  const pathname_ = '../media/console.piano.json'

  var file = require(pathname)

  const code0 = ['KeyA', 'KeyB', 'KeyC', 'KeyD', 'KeyE', 'KeyF', 'KeyG', 'KeyH', 'KeyI', 'KeyJ', 'KeyK', 'KeyL', 'KeyM', 'KeyN', 'KeyO', 'KeyP', 'KeyQ', 'KeyR', 'KeyS', 'KeyT', 'KeyU', 'KeyV', 'KeyW', 'KeyX', 'KeyY', 'KeyZ', 'Comma', 'BracketLeft', 'Semicolon', 'Period', 'BracketRight', 'Quote', 'Slash']

  var codeMap = {
    '1': 'F',
    '2': 'G',
    '3': 'T',
    '4': 'R',
    '5': 'D',
    '6': 'C',
    '7': 'V',

    'A': 'M',
    'B': 'N',
    'C': 'J',
    'D': 'H',
    'E': 'U',
    'F': 'I',
    'G': 'K',
  }

  var codeMap_ = {
    '1': 100,
    '2': 200,
    '3': 300,
    '4': 400,
    '5': 500,
    '6': 600,
    '7': 700,

    'A': 8,
    'B': 9,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
  }

  const c_n = (code) => {
    var [a, b, c] = code.split('')

    return codeMap_[a] + codeMap_[b] + (c ? 0.5 : 0)
  }


  file = file.map(i => {

    var p = {
      "codeInclued": [[]],
      "codeExclude": [],
      "codeMain": []
    }

    if (['A0'].includes(i.name)) {
      p = {
        "codeInclued": [['KeyQ']],
        "codeMain": ['KeyQ']
      }
      return { ...i, ...p }
    }

    if (['A0M'].includes(i.name)) {
      p = {
        "codeInclued": [['KeyW']],
        "codeMain": ['KeyW']
      }
      return { ...i, ...p }
    }

    if (['B0'].includes(i.name)) {
      p = {
        "codeInclued": [['KeyA']],
        "codeMain": ['KeyA']
      }
      return { ...i, ...p }
    }

    if (['C8'].includes(i.name)) {
      p = {
        "codeInclued": [['KeyS']],
        "codeMain": ['KeyS']
      }
      return { ...i, ...p }
    }

    if (i.name.includes('M')) {
      p.codeInclued[0].push('Space')
    } else {
      p.codeExclude.push('Space')
    }

    p.codeInclued[0].push('Key' + codeMap[i.name.split('')[0]])
    p.codeInclued[0].push('Key' + codeMap[i.name.split('')[1]])

    p.codeMain.push('Key' + codeMap[i.name.split('')[0]])
    p.codeMain.push('Key' + codeMap[i.name.split('')[1]])

    if (i.name.includes(''))
      return { ...i, ...p }
  })

  file = file.sort((a, b) => {
    return c_n(a.name) - c_n(b.name)
  })

  fs.writeFileSync(path.join(__dirname, pathname_), JSON.stringify(file))
}

run()