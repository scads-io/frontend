import React from 'react'
import styled from 'styled-components'
import { BoxProps, Box, Flex, FlexProps } from '@scads/uikit'
import Container from 'components/Layout/Container'
import CurvedDivider from './CurvedDivider'
import { ClipFill, DividerFill } from './types'

interface PageSectionProps extends BackgroundColorProps {
  svgFill?: string
  dividerComponent?: React.ReactNode
  hasCurvedDivider?: boolean
  dividerPosition?: 'top' | 'bottom'
  concaveDivider?: boolean
  containerProps?: BoxProps
  innerProps?: BoxProps
  clipFill?: ClipFill
  dividerFill?: DividerFill
}

interface BackgroundColorProps extends FlexProps {
  index: number
  background?: string
  getPadding?: () => string
}

const BackgroundColor = styled(Flex)<BackgroundColorProps>`
  position: relative;
  flex-direction: column;
  align-items: center;
  z-index: ${({ index }) => index - 1};
  padding-bottom: ${({ getPadding }) => getPadding()};
`

const ChildrenWrapper = styled(Container)`
  min-height: auto;
  padding-top: 16px;
  padding-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`

const PageSection: React.FC<PageSectionProps> = ({
  children,
  background,
  index = 1,
  dividerComponent,
  dividerPosition = 'bottom',
  hasCurvedDivider = true,
  concaveDivider = false,
  clipFill,
  dividerFill,
  containerProps,
  innerProps,
  ...props
}) => {
  const getPadding = () => {
    if (!hasCurvedDivider) {
      return '48px'
    }
    return '0'
  }

  return (
    <Box {...containerProps}>
      {hasCurvedDivider && dividerPosition === 'top' && (
        <CurvedDivider
          index={index}
          concave={concaveDivider}
          dividerPosition={dividerPosition}
          dividerComponent={dividerComponent}
          clipFill={clipFill}
          dividerFill={dividerFill}
        />
      )}
      <BackgroundColor background={background} index={index} getPadding={getPadding} {...props}>
        <ChildrenWrapper {...innerProps}>{children}</ChildrenWrapper>
      </BackgroundColor>
    </Box>
  )
}

export default PageSection
