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

const varCode = async (list) => {
  const codes = ['KeyA', 'KeyB', 'KeyC', 'KeyD', 'KeyE', 'KeyF', 'KeyG', 'KeyH', 'KeyI', 'KeyJ', 'KeyK', 'KeyL', 'KeyM', 'KeyN', 'KeyO', 'KeyP', 'KeyQ', 'KeyR', 'KeyS', 'KeyT', 'KeyU', 'KeyV', 'KeyW', 'KeyX', 'KeyY', 'KeyZ', 'Comma', 'BracketLeft', 'Semicolon', 'Period', 'BracketRight', 'Quote', 'Slash']

  list.forEach((i, index) => {
    i.codeInclued = [[codes[index]]]
    i.codeExclude = []
    i.codeMain = [codes[index]]
    i.name = 'Jazz Drum'
  })

  return list
}

const run = async () => {
  const pathname = './console.jazzdrum.json'

  const file = require(pathname)

  const r = await varCode(file)

  fs.writeFileSync(path.join(__dirname, pathname), JSON.stringify(r))
}

run()