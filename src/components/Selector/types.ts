import { TMode, TColors } from '../../store'

export interface ISelectorProps
  extends React.PropsWithRef<JSX.IntrinsicElements['div']> {
  colors: TColors
  mode: TMode
  onGetColor(color: string): void
}
