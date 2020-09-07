import { IState, ActionsTypes, TActions } from './types'

const INITIAL_STATE: IState = {
  colors: {
    custom: '#6930c3',
    solid: '#6930c3',
  },
  mode: 'solid',
  scheme: 'hex',
}

const reducer = (state = INITIAL_STATE, action: TActions) => {
  switch (action.type) {
    case ActionsTypes.ON_PICKER_COLOR:
      return { ...state, colors: action.payload }

    case ActionsTypes.ON_CHANGE_MODE:
      return { ...state, mode: action.payload }

    case ActionsTypes.ON_CHANGE_SCHEME_COLOR:
      return { ...state, scheme: action.payload }

    case ActionsTypes.ON_SET_SELECTOR_COLOR:
      return {
        ...state,
        colors: { ...state.colors, custom: action.payload },
      }

    case ActionsTypes.ON_SET_RANGER_COLOR:
      return {
        ...state,
        colors: { custom: action.payload, solid: action.payload },
      }

    default:
      return state
  }
}

export { reducer, INITIAL_STATE }
