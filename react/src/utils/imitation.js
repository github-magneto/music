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

  console: 'Piano',
  bgmCollection: 'Asphalt',
  bgm: null,
}

export default ImitationINS