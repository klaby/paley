export interface IHeaderProps
  extends React.PropsWithRef<JSX.IntrinsicElements['header']> {
  onPicker(): void
  onGetMode(value: string): void
  onGetSheme(value: string): void
}
