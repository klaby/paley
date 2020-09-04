import { useReducer } from 'react'

import { IState, ActionsTypes, TActions } from './types'

const INITIAL_STATE: IState = {
  colors: {
    advanced: '',
    solid: '',
  },
  mode: 'solid',
  sheme: 'hex',
}

const reducer = (state = INITIAL_STATE, action: TActions) => {
  switch (action.type) {
    case ActionsTypes.ON_PICKER_COLOR:
      return { ...state, colors: action.payload }

    case ActionsTypes.ON_CHANGE_MODE:
      return { ...state, mode: action.payload }

    case ActionsTypes.ON_CHANGE_SCHEME_COLOR:
      return { ...state, sheme: action.payload }

    case ActionsTypes.ON_SET_SELECTOR_COLOR:
      return {
        ...state,
        colors: { ...state.colors, advanced: action.payload },
      }

    case ActionsTypes.ON_SET_RANGER_COLOR:
      return {
        ...state,
        colors: { advanced: action.payload, solid: action.payload },
      }

    default:
      return state
  }
}

export { reducer, INITIAL_STATE }
