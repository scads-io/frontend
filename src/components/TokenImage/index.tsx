import React from 'react'
import {
  TokenPairImage as UIKitTokenPairImage,
  TokenPairImageProps as UIKitTokenPairImageProps,
  ImageProps,
} from '@scads-io/uikit'
import tokens from 'config/constants/tokens'
import { Token } from '@scads/sdk'

interface TokenPairImageProps extends Omit<UIKitTokenPairImageProps, 'primarySrc' | 'secondarySrc'> {
  primaryToken: Token
  secondaryToken: Token
}

const getImageUrlFromToken = (token: Token) => {
  const tokenSymbol = token.symbol === 'BNB' ? tokens.wbnb.symbol : token.symbol
  return `/images/tokens/${tokenSymbol}.svg`
}

export const TokenPairImage: React.FC<TokenPairImageProps> = ({ primaryToken, secondaryToken, ...props }) => {
  return (
    <UIKitTokenPairImage
      primarySrc={getImageUrlFromToken(primaryToken)}
      secondarySrc={getImageUrlFromToken(secondaryToken)}
      {...props}
    />
  )
}

interface TokenImageProps extends ImageProps {
  token: Token
}

export const TokenImage: React.FC<TokenImageProps> = ({ token, ...props }) => {
  return <img src={getImageUrlFromToken(token)} className="ms-14" alt="" {...props} />
}
