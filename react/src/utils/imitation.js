import Imitation from 'imitation-imm/src/index'

const ImitationINS = new Imitation()

ImitationINS.state = {
  xhrLoading: false,
  message: 0,

  pressKeep: [],
  pressUpdate: 0,

  tooltip: false,
  scale: 1,
  volume: 0.5,
  cover: false,

  media: [],

  console: null,
  bgmCollection: null,
  bgm: null,

  screenWidth: 0,
  screenHeight: 0,
}

export default ImitationINS