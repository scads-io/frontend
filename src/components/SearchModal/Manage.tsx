import React, { useState } from 'react'
import { Token } from '@scads/sdk'
import { ButtonMenu, ButtonMenuItem } from '@scads/uikit'
import styled from 'styled-components'
import { TokenList } from '@uniswap/token-lists'
import { useTranslation } from 'contexts/Localization'
import { ModalBody } from 'components/Modal'
import ManageLists from './ManageLists'
import ManageTokens from './ManageTokens'
import { CurrencyModalView } from './types'

const StyledButtonMenu = styled(ButtonMenu)`
  width: 100%;
  border: none;
`

export default function Manage({
  setModalView,
  setImportList,
  setImportToken,
  setListUrl,
}: {
  setModalView: (view: CurrencyModalView) => void
  setImportToken: (token: Token) => void
  setImportList: (list: TokenList) => void
  setListUrl: (url: string) => void
}) {
  const [showLists, setShowLists] = useState(true)

  const { t } = useTranslation()

  return (
    <ModalBody>
      <StyledButtonMenu
        activeIndex={showLists ? 0 : 1}
        onItemClick={() => setShowLists((prev) => !prev)}
        scale='md'
        variant='primary'
        mb='32px'>
        <ButtonMenuItem width='50%'>{t('Lists')}</ButtonMenuItem>
        <ButtonMenuItem width='50%'>{t('Tokens')}</ButtonMenuItem>
      </StyledButtonMenu>
      {showLists ? (
        <ManageLists setModalView={setModalView} setImportList={setImportList} setListUrl={setListUrl} />
      ) : (
        <ManageTokens setModalView={setModalView} setImportToken={setImportToken} />
      )}
    </ModalBody>
  )
}
