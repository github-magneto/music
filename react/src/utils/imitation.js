import Imitation from 'imitation-imm/src/index'

const ImitationINS = new Imitation()

ImitationINS.state = {
  xhrLoading: false,
  message: 0,

  pressKeep: [],
  pressUpdate: 0,

  musicButtonStyle: {
    size: 64,
    margin: 8
  },

  scale: 1
}

export default ImitationINS