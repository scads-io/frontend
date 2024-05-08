import { Currency, ETHER, Token } from '@scads/sdk'
import { BinanceIcon } from '@scads-io/uikit'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import getCurrencyLogoURL from 'utils/getCurrencyLogoURL'
import getTokenLogoURL from 'utils/getTokenLogoURL'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from './Logo'

const scadsDarkThemeLogo = 'https://svgshare.com/i/zPD.svg'

const twineDarkThemeLogo = 'https://svgshare.com/i/zPk.svg'

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
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

  if (currency?.symbol === 'Scads') {
    const scadsLogoUri = scadsDarkThemeLogo
    const singleString: string[] = [scadsLogoUri, '']
    return <Logo srcs={singleString} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  }

  if (currency?.symbol === 'TWINE') {
    const twineLogoUri = twineDarkThemeLogo 
    const singleString: string[] = [twineLogoUri, '']
    return <Logo srcs={singleString} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  }
  
  return <Logo srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
