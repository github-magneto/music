const fs = require('fs')
const path = require('path')

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
  const file = require('./bgm.warcraft.json')

  const r = await parseUrl(file)

  fs.writeFileSync(path.join(__dirname, './code.hatsune-miku.json'), JSON.stringify(r))
}

run()