import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { clipboard } from 'electron'
import { execSync } from 'child_process'

import { IPickerContext, ActionsTypes, TMode, TSchemeColor } from './types'

import { reducer, INITIAL_STATE } from './reducer'

import { _Color } from '../helpers'

const PickerContext = createContext({} as IPickerContext)

const PickerProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const [schemeUpdated, setSchemeUpdated] = useState(false)

  /**
   * @function picker
   *
   * This function performs grim by selecting any part of the screen and choosing
   * colors based on the position.
   */
  const picker = (): void => {
    const color = execSync(
      'grim -g "$(slurp -p)" -t ppm - | convert - -format "%[pixel:p{0,0}]" txt:-',
      { encoding: 'utf8' },
    ).split(' ')[7]

    dispatch({
      type: ActionsTypes.ON_PICKER_COLOR,
      payload: {
        custom: color,
        solid: color,
      },
    })
  }

  /**
   * @function copy
   *
   * Copy selected color to clipboard.
   */
  const copy = useCallback(() => {
    clipboard.writeText(
      state.mode === 'custom' ? state.colors.custom : state.colors.solid,
    )
  }, [state.mode, state.colors])

  /**
   * @function setSelectorColor
   *
   * Set the selected color.
   *
   * @param {string} color
   */
  const setSeletorColor = useCallback(
    (color: string) => {
      dispatch({
        type: ActionsTypes.ON_SET_SELECTOR_COLOR,
        payload: _Color.getColorPerType(color, state.scheme),
      })
    },
    [state.scheme],
  )

  /**
   * @function setRangerColor
   *
   * Set the ranger color.
   *
   * @param {string} color
   */
  const setRangerColor = useCallback(
    (color: string) => {
      dispatch({
        type: ActionsTypes.ON_SET_RANGER_COLOR,
        payload: _Color.getColorPerType(color, state.scheme),
      })
    },
    [state.scheme],
  )

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

    setSchemeUpdated(true)
  }

  /**
   * @function applyShemeColor
   */
  const applyShemeColor = useCallback(() => {
    if (schemeUpdated) {
      setSeletorColor(_Color.getColorPerType(state.colors.custom, state.scheme))

      setRangerColor(_Color.getColorPerType(state.colors.solid, state.scheme))

      setSchemeUpdated(false)
    }
  }, [schemeUpdated, state.colors, state.scheme])

  useEffect(() => {
    applyShemeColor()
  }, [applyShemeColor])

  return (
    <PickerContext.Provider
      value={{
        actions: {
          picker,
          copy,
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
