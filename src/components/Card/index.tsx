import React from 'react'
import styled from 'styled-components'
import { Box } from '@scads/uikit'

const Card = styled(Box)<{
  width?: string
  padding?: string
  border?: string
  borderRadius?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  border-radius: 16px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
`
export default Card

export const LightGreyCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.background};
`

export const NewCard = ({ className, theme, children }) => {

  return (
    <div
      className={`backdrop-filter backdrop-blur-lg bg-opacity-10 ${
        theme
          ? "bg-[#58585E] text-[#B6B6B6] shadow-sm shadow-[#ffffff20]"
          : " bg-gradient-to-br from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.2)] text-black shadow-sm shadow-white"
      } rounded-[30px] lg:px-10 ${className}`}
    >
      {children}
    </div>
  )
}