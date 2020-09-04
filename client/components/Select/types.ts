export type TData = { value: string | number; label: string }

export interface ISelectProps
  extends React.PropsWithRef<JSX.IntrinsicElements['div']> {
  data: TData[]
  onGetValue?: (data: TData) => void
}
