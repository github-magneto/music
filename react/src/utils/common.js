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

const musicPlay = (src) => {
  const audio = document.createElement('audio')
  audio.style = 'display: none'

  const source = document.createElement('source')
  source.src = src

  audio.appendChild(source)

  const body = document.getElementsByTagName('body')[0]
  body.appendChild(audio)

  audio.play()

  audio.onended = () => {
    body.removeChild(audio)
  }
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