import Imitation from 'imitation-imm/src/index'

const ImitationINS = new Imitation()

ImitationINS.state = {
  xhrLoading: false,
  message: 0,

  pressMode: 'includes',
  pressKeep: [],
  pressUpdate: 0
}

export default ImitationINS