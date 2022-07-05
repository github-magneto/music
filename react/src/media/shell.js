const l = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const r = l.map(i => {
  return {
    "name": i,
    "codeInclued": [
      [
        'Key' + i
      ]
    ],
    "codeExclude": [],
    "codeMain": ['Key' + i],
  }
})

const fs = require('fs')
const path = require('path')

fs.writeFileSync(path.join(__dirname, './code.keyboard.json'), JSON.stringify(r))