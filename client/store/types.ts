import { TTypeColor } from '../helpers'

export enum ActionsTypes {
  ON_PICKER_COLOR = 'ON_PICKER_COLOR',
  ON_CHANGE_MODE = 'ON_CHANGE_MODE',
  ON_CHANGE_SCHEME_COLOR = 'ON_CHANGE_SCHEME_COLOR',
  ON_SET_SELECTOR_COLOR = 'ON_SET_SELECTOR_COLOR',
  ON_SET_RANGER_COLOR = 'ON_SET_RANGER_COLOR',
}

export type TAction<T, P> = {
  type: T
  payload: P
}

export type TColors = {
  solid: string
  advanced: string
}

export type TSchemeColor = TTypeColor

export type TMode = 'solid' | 'advanced'

export type TPickerAction = TAction<ActionsTypes.ON_PICKER_COLOR, TColors>

export type TChangeModeAction = TAction<ActionsTypes.ON_CHANGE_MODE, TMode>

export type TChangeschemeColorAction = TAction<
  ActionsTypes.ON_CHANGE_SCHEME_COLOR,
  TSchemeColor
>

export type TSetSelectorColorAction = TAction<
  ActionsTypes.ON_SET_SELECTOR_COLOR,
  string
>

export type TSetRangerColorAction = TAction<
  ActionsTypes.ON_SET_RANGER_COLOR,
  string
>

export type TActions =
  | TPickerAction
  | TChangeModeAction
  | TChangeschemeColorAction
  | TSetSelectorColorAction
  | TSetRangerColorAction

export interface IState {
  colors: TColors
  mode: TMode
  scheme: TSchemeColor
}

export interface IActions {
  picker(): void
  copy(): void
  setSeletorColor(color: string): void
  setRangerColor(color: string): void
  changeMode(mode: TMode): void
  changeSchemeColor(scheme: TSchemeColor): void
}

export interface IPickerContext {
  state: IState
  actions: IActions
}
