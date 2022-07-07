import Imitation from 'imitation-imm/src/index'

const ImitationINS = new Imitation()

ImitationINS.state = {
  xhrLoading: false,
  message: 0,

  pressKeep: [],
  pressUpdate: 0,

  tooltip: true,
  scale: 1,

  media: [],

  console: 'JazzDrum',
  bgmCollection: 'JOJO',
  bgm: null,

  screenWidth: 0,
  screenHeight: 0,
}

export default ImitationINS