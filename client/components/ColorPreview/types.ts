export interface IColorPreviewProps
  extends React.PropsWithRef<JSX.IntrinsicElements['div']> {
  onGetColor?: (color: string) => void
  color: string
}
