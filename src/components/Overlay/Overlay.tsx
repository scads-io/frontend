import React, { FC, useEffect } from "react"
import styled from "styled-components"
import { Box, BoxProps } from "@scads-io/uikit"

const StyledOverlay = styled(Box)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 20;
`

const BodyLock = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    }
  }, [])

  return null
}

export const Overlay: FC<BoxProps> = (props) => {
  return (
    <>
      <BodyLock />
      <StyledOverlay role="presentation" {...props} />
    </>
  )
}

export default Overlay
