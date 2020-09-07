export interface IRangeProps
  extends React.PropsWithRef<JSX.IntrinsicElements['div']> {
  color: string
  onGetColor(color: string): void
}
