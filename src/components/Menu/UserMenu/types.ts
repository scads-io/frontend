import { FlexProps } from "styled-system"

export interface MenuProps extends FlexProps {
  account?: string
  text?: string
}

export interface UserMenuItemProps {
  disabled?: boolean
}
