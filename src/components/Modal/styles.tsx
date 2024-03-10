import React from "react"
import styled from "styled-components"
import { Flex, Box, ArrowBackIcon, CloseIcon, IconButton } from "@scads-io/uikit"
import { ModalProps } from "./types"

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
`

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
      <CloseIcon width='35px' color="secondary" />
    </IconButton>
  )
}

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="secondary" />
    </IconButton>
  )
}

export const ModalContainer = styled(Box)<{ minWidth: string }>`
  overflow: hidden;
  border-radius: 32px;
  width: 100%;
  max-height: 100vh;
  background: ${({ theme }) => theme.isDark ? "#191919" : "#E2E6E9"};
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`

export const ConnectModalContainer = styled(Box)<{ minWidth: string }>`
  overflow: hidden;
  width: 100%;
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndices.modal};

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth};
    max-width: 100%;
  }
`
