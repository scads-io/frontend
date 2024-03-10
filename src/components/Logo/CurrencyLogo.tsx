import { Currency, ETHER, Token } from '@scads/sdk'
import { BinanceIcon } from '@scads-io/uikit'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import getCurrencyLogoURL from 'utils/getCurrencyLogoURL'
import getTokenLogoURL from 'utils/getTokenLogoURL'
import { useThemeManager } from 'state/user/hooks'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from './Logo'

const scadsDarkThemeLogo = 'https://svgshare.com/i/zPD.svg'
const scadsLightThemeLogo = 'https://svgshare.com/i/zP5.svg'

const twineDarkThemeLogo = 'https://svgshare.com/i/zPk.svg'
const twineLightThemeLogo = 'https://svgshare.com/i/zQk.svg'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const [isDark] = useThemeManager()
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)
  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []
    
    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }
      return [getCurrencyLogoURL(currency.symbol)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    return <BinanceIcon width={size} style={style} />
  }

  if (currency.symbol === 'Scads') {
    const scadsLogoUri = isDark ?  scadsDarkThemeLogo : scadsLightThemeLogo
    const singleString: string[] = [scadsLogoUri, '']
    return <StyledLogo size={size} srcs={singleString} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  }

  if (currency.symbol === 'TWINE') {
    const twineLogoUri = isDark ?  twineDarkThemeLogo : twineLightThemeLogo
    const singleString: string[] = [twineLogoUri, '']
    return <StyledLogo size={size} srcs={singleString} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  }
  
  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
