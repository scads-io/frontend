import React from 'react'
import styled from 'styled-components'
import { Heading, Flex, Text, useMatchBreakpoints } from '@scads/uikit'

const StyledHeading = styled(Heading)`
  color: #353688;
`

const StyledHeading2 = styled(Heading)`
  color: #757474;
`

const StyledText = styled(Text)`
  color: #000;
  text-align: center;
  font-size: 20px;
`

const StatCardContent: React.FC<{ headingText: string; bodyText?: string; children?: React.ReactNode }> = ({
  headingText,
  bodyText,
  children,
}) => {
  const { isMobile } = useMatchBreakpoints()
  const split = headingText.split(' ')
  const lastWord = split.pop()
  const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex flexDirection="column" justifyContent="center">
      <StyledText color="overlay" bold mb="24px" textAlign="center">
        {bodyText}
        {children}
      </StyledText>
      <StyledHeading2 fontSize={!isMobile ? '24px !important' : ''} scale="lg" textAlign="center">
        {remainingWords}
      </StyledHeading2>
      <StyledHeading scale="xl" fontSize="24px !important" textAlign="center">
        {lastWord}
      </StyledHeading>
    </Flex>
  )
}

export default StatCardContent
