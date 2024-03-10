import React from "react"
import styled from "styled-components"
import { Flex, ChevronDownIcon } from '@scads-io/uikit'
import { MenuProps } from "./types"
import MenuIcon from "./MenuIcon"

export const StyledUserMenu = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 16px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  padding-left: 40px;
  padding-right: 8px;
  position: relative;

  &:hover {
    opacity: 0.65;
  }
`

export const LabelText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  display: block;
  margin-left: 8px;
  margin-right: 4px;
`

const Menu: React.FC<MenuProps> = ({
  account,
  text,
  ...props
}) => {
  const accountEllipsis = account ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}` : null

  return (
    <Flex alignItems="center" height="100%" {...props}>
      <StyledUserMenu>
        <MenuIcon />
        <LabelText title={text || account}>{text || accountEllipsis}</LabelText>
        <ChevronDownIcon color="text" width="24px" />
      </StyledUserMenu>
    </Flex>
  )
}

export default Menu
