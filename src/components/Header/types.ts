import { TIcon } from '@minily/components'
import { TData } from '../Select/types'

export type TMenu = {
  defaultValue: string
  onChange?(value: TData): void
  options: {
    label: string
    value: any
  }[]
}

export type TButton = {
  icon: TIcon
  onClick?(): void
}

export interface IHeaderProps
  extends React.PropsWithRef<JSX.IntrinsicElements['header']> {
  menu: TMenu[]
  buttons: TButton[]
}
