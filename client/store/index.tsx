import React, { createContext, useReducer } from 'react'

import { IPickerContext, ActionsTypes, TMode, TSchemeColor } from './types'

import { reducer, INITIAL_STATE } from './reducer'

const PickerContext = createContext({} as IPickerContext)

const PickerProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  /**
   * @function picker
   *
   * This function performs grim by selecting any part of the screen and choosing
   * colors based on the position.
   */
  const picker = () => {
    window.eel.picker()((color: string) => {
      const hexColor = color.split(' ')[7]

      dispatch({
        type: ActionsTypes.ON_PICKER_COLOR,
        payload: {
          advanced: hexColor,
          solid: hexColor,
        },
      })
    })
  }

  /**
   * @function changeMode
   *
   * change color display mode.
   *
   * @param {TMode} mode
   */
  const changeMode = (mode: TMode) => {
    dispatch({
      type: ActionsTypes.ON_CHANGE_MODE,
      payload: mode,
    })
  }

  /**
   * @function changeSchemeColor
   *
   * Change the color format.
   *
   * @param {TSchemeColor} scheme
   */
  const changeSchemeColor = (scheme: TSchemeColor) => {
    dispatch({
      type: ActionsTypes.ON_CHANGE_SCHEME_COLOR,
      payload: scheme,
    })
  }

  /**
   * @function setSelectorColor
   *
   * Set the selected color.
   *
   * @param {string} color
   */
  const setSeletorColor = (color: string) => {
    dispatch({
      type: ActionsTypes.ON_SET_SELECTOR_COLOR,
      payload: color,
    })
  }

  /**
   * @function setRangerColor
   *
   * Set the ranger color.
   *
   * @param {string} color
   */
  const setRangerColor = (color: string) => {
    dispatch({
      type: ActionsTypes.ON_SET_RANGER_COLOR,
      payload: color,
    })
  }

  return (
    <PickerContext.Provider
      value={{
        actions: {
          picker,
          changeMode,
          changeSchemeColor,
          setSeletorColor,
          setRangerColor,
        },
        state,
      }}
    >
      {children}
    </PickerContext.Provider>
  )
}

export { PickerProvider, PickerContext }
export * from './types'
