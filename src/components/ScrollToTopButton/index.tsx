import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Button, ArrowUpIcon } from '@scads/uikit'
import throttle from 'lodash/throttle'

const FixedContainer = styled.div`
  position: fixed;
  right: 5%;
  bottom: calc(110px + env(safe-area-inset-bottom));
`

const StyledButton = styled(Button)`
  --tw-backdrop-blur: blur(30px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
    var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
    var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
    var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
    var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  --tw-bg-opacity: 0.1;
  background: ${({ theme }) => (theme.isDark ? 'rgb(88 88 94 / var(--tw-bg-opacity))' : 'rgba(255,255,255,0.6)')};
`

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 500) {
        setVisible(true)
      } else if (scrolled <= 500) {
        setVisible(false)
      }
    }

    const throttledToggleVisible = throttle(toggleVisible, 200)

    window.addEventListener('scroll', throttledToggleVisible)

    return () => window.removeEventListener('scroll', throttledToggleVisible)
  }, [])

  return (
    <FixedContainer style={{ display: visible ? 'inline' : 'none' }}>
      <StyledButton
        width={48}
        height={48}
        endIcon={<ArrowUpIcon color='white' style={{ marginLeft: 0 }} />}
        onClick={scrollToTop}
      />
    </FixedContainer>
  )
}

export default ScrollToTopButton
