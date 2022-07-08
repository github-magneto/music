const base64Audio = (audioFile, callback) => {
  var reader = new FileReader()
  reader.readAsDataURL(audioFile)
  reader.onload = () => {
    callback(reader.result)
  }
}

const downloadFile = (fileName, content) => {
  const aLink = document.createElement('a')
  const evt = document.createEvent("MouseEvents")
  evt.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  aLink.download = fileName
  aLink.href = URL.createObjectURL(new Blob([content], { type: 'text/json' }))
  aLink.dispatchEvent(evt)
}

const copy = (v, callback) => {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.setAttribute('value', v)
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    callback()
  }
  document.body.removeChild(input)
}


function AudioControl() {
  this.audios = new Array(8).fill().map(i => {
    const audio = new Audio()
    audio.playing = false
    audio.onended = () => audio.playing = false
    return audio
  })
}

AudioControl.prototype.play = function (src) {
  const audio = this.audios.find(i => !i.playing)
  if (!audio) return
  audio.playing = true
  audio.src = src
  audio.play()
}

const musicPlay = (src) => {
  new Audio(src).play()
}

const includesArray = (a, b) => {
  return !a.some(i => !b.includes(i))
}

const agent = () => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return 'phone'
  } else {
    return 'pc'
  }
}

export { base64Audio, downloadFile, copy, musicPlay, includesArray, agent }