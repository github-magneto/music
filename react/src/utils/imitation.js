import Imitation from 'imitation-imm/src/index'

const ImitationINS = new Imitation()

ImitationINS.state = {
  xhrLoading: false,
  message: 0,

  pressKeep: [],
  pressUpdate: 0,

  consoleButton: {
    size: 64,
    margin: 8,
    tooltip: true
  },

  scale: 1,

  mediaSource: [],

  currentConsoleCore: 'Piano',
  currentConsoleButton: 'Basic',
  currentBgmGroup: 'Asphalt',
  currentBgm: null,
}

export default ImitationINS