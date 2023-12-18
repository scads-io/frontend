import { Heading } from '@scads/uikit'
import styled from 'styled-components'

const GradientHeading = styled(Heading)`
  background: ${({ theme }) => theme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default GradientHeading