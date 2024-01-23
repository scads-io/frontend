import React, { useCallback, useState } from 'react'
import { Currency, Token } from '@scads/sdk'
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBackButton,
  ModalCloseButton,
  ModalBody,
  InjectedModalProps,
} from 'components/Modal'
import styled from 'styled-components'
import usePrevious from 'hooks/usePreviousValue'
import { TokenList } from '@uniswap/token-lists'
import { useTranslation } from 'contexts/Localization'
import { NewCard } from 'components/Card'
import CurrencySearch from './CurrencySearch'
import ImportToken from './ImportToken'
import Manage from './Manage'
import ImportList from './ImportList'
import { CurrencyModalView } from './types'

const StyledModalContainer = styled(ModalContainer)`
  max-width: 420px;
  width: 100%;
  background: none;
`

const StyledModalBody = styled(ModalBody)`
  padding: 24px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

interface CurrencySearchModalProps extends InjectedModalProps {
  selectedCurrency?: Currency | null
  onCurrencySelect: (currency: Currency) => void
  otherSelectedCurrency?: Currency | null
  showCommonBases?: boolean
  theme: boolean
}

export default function CurrencySearchModal({
  onDismiss = () => null,
  onCurrencySelect,
  selectedCurrency,
  otherSelectedCurrency,
  showCommonBases = false,
  theme
}: CurrencySearchModalProps) {
  const [modalView, setModalView] = useState<CurrencyModalView>(CurrencyModalView.search)

  const handleCurrencySelect = useCallback(
    (currency: Currency) => {
      onDismiss()
      onCurrencySelect(currency)
    },
    [onDismiss, onCurrencySelect],
  )

  // for token import view
  const prevView = usePrevious(modalView)
  // used for import token flow
  const [importToken, setImportToken] = useState<Token | undefined>()

  // used for import list
  const [importList, setImportList] = useState<TokenList | undefined>()
  const [listURL, setListUrl] = useState<string | undefined>()

  const { t } = useTranslation()

  const config = {
    [CurrencyModalView.search]: { title: t('Select a Token'), onBack: undefined },
    [CurrencyModalView.manage]: { title: t('Manage'), onBack: () => setModalView(CurrencyModalView.search) },
    [CurrencyModalView.importToken]: {
      title: t('Import Tokens'),
      onBack: () =>
        setModalView(prevView && prevView !== CurrencyModalView.importToken ? prevView : CurrencyModalView.search),
    },
    [CurrencyModalView.importList]: { title: t('Import List'), onBack: () => setModalView(CurrencyModalView.search) },
  }

  return (
    <StyledModalContainer minWidth='320px'>
      <NewCard
        className={`lg:!px-0 lg:backdrop-blur-3xl !bg-opacity-60 ${
          theme && "!bg-[#2B2B37]"
        } relative`}
        theme={theme}
      >
        <ModalHeader>
          <ModalTitle>
            {config[modalView].onBack && <ModalBackButton onBack={config[modalView].onBack} />}
            <div
              className={`${theme ? "text-white" : "text-black"}`}
              >
              <h1 className="text-center text-2xl font-semibold">{config[modalView].title}</h1>
            </div>
          </ModalTitle>
          <ModalCloseButton onDismiss={onDismiss} />
        </ModalHeader>
        <StyledModalBody>
          {modalView === CurrencyModalView.search ? (
            <CurrencySearch
              onCurrencySelect={handleCurrencySelect}
              selectedCurrency={selectedCurrency}
              otherSelectedCurrency={otherSelectedCurrency}
              showCommonBases={showCommonBases}
              showImportView={() => setModalView(CurrencyModalView.importToken)}
              setImportToken={setImportToken}
            />
          ) : modalView === CurrencyModalView.importToken && importToken ? (
            <ImportToken tokens={[importToken]} handleCurrencySelect={handleCurrencySelect} />
          ) : modalView === CurrencyModalView.importList && importList && listURL ? (
            <ImportList list={importList} listURL={listURL} onImport={() => setModalView(CurrencyModalView.manage)} />
          ) : modalView === CurrencyModalView.manage ? (
            <Manage
              setModalView={setModalView}
              setImportToken={setImportToken}
              setImportList={setImportList}
              setListUrl={setListUrl}
            />
          ) : (
            ''
          )}
        </StyledModalBody>
      </NewCard>
    </StyledModalContainer>
  )
}
