export interface ISelectorProps
  extends React.PropsWithRef<JSX.IntrinsicElements['div']> {
  onGetColor?: (color: string) => void
  onCopyColor?: (color: string) => void
  color: string
  mode: string
  scheme: string
}
