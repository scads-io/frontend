import React from "react"
import styled, { DefaultTheme } from "styled-components"
import { CheckmarkCircleIcon, ErrorIcon, BlockIcon, InfoIcon, Text, IconButton, CloseIcon, Heading } from "@scads-io/uikit"
import { useThemeManager } from 'state/user/hooks'
import { NewCard } from "components/Card"
import { AlertProps, variants } from "./types"

interface ThemedIconLabel {
  variant: AlertProps["variant"]
  theme: DefaultTheme
  hasDescription: boolean
}

const getThemeColor = ({ theme, variant = variants.INFO }: ThemedIconLabel) => {
  switch (variant) {
    case variants.DANGER:
      return theme.colors.failure
    case variants.WARNING:
      return theme.colors.warning
    case variants.SUCCESS:
      return theme.colors.success
    case variants.INFO:
    default:
      return theme.colors.secondary
  }
}

const getIcon = (variant: AlertProps["variant"] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return BlockIcon
    case variants.WARNING:
      return ErrorIcon
    case variants.SUCCESS:
      return CheckmarkCircleIcon
    case variants.INFO:
    default:
      return InfoIcon
  }
}

const IconLabel = styled.div<ThemedIconLabel>`
  background-color: ${getThemeColor};
  border-radius: 16px 0 0 16px;
  padding: 12px;
`

const withHandlerSpacing = 32 + 12 + 8 // button size + inner spacing + handler position
const Details = styled.div<{ hasHandler: boolean }>`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({ hasHandler }) => (hasHandler ? `${withHandlerSpacing}px` : "12px")};
  padding-top: 12px;
`

const StyledHeading= styled(Heading)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
`

const StyledText= styled(Text)`
  color: ${({ theme }) => theme.isDark ? "white" : "black"};
`

const Alert: React.FC<AlertProps> = ({ title, children, variant, onClick }) => {
  const [isDark] = useThemeManager()
  const Icon = getIcon(variant)

  return (
    <NewCard
      className="flex lg:!px-0"
      theme={isDark}>
      <IconLabel variant={variant} hasDescription={!!children}>
        <Icon color="currentColor" width="24px" />
      </IconLabel>
      <Details hasHandler={!!onClick}>
        <StyledHeading as="h2" scale="md" mb="5px">
          {title}
        </StyledHeading>
        {typeof children === "string" ? <StyledText bold color="overlay" as="p">{children}</StyledText> : children}
      </Details>
      {onClick && (
        <div className="absolute top-2 right-2 rounded-r-2xl">
          <IconButton scale="sm" variant="text" onClick={onClick}>
            <CloseIcon width="24px" color="currentColor" />
          </IconButton>
        </div>
      )}
    </NewCard>
  )
}

export default Alert
