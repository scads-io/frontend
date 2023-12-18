import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { ScadsTheme } from '@scads/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ScadsTheme {}
}

const GlobalStyle = createGlobalStyle`
  
`

export default GlobalStyle
