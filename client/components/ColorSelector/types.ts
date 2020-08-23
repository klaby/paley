export interface IColorPreviewProps
  extends React.PropsWithRef<JSX.IntrinsicElements['div']> {
  onGetRangeColor?: (color: string) => void
  onGetPreviewColor?: (color: string) => void
  color: string
}
