import React, { useCallback, useState } from 'react'
import { Currency } from '@scads/sdk'
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
import { useTranslation } from 'contexts/Localization'
import { NewCard } from 'components/Card'
import CurrencySearch from './CurrencySearch'
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
  theme: boolean
}

export default function CurrencySearchModal({
  onDismiss = () => null,
  onCurrencySelect,
  selectedCurrency,
  otherSelectedCurrency,
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

  const { t } = useTranslation()

  const config = {
    [CurrencyModalView.search]: { title: t('Select a Token'), onBack: undefined },
    [CurrencyModalView.manage]: { title: t('Manage'), onBack: () => setModalView(CurrencyModalView.search) },
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
            />
          ) : (
            ''
          )}
        </StyledModalBody>
      </NewCard>
    </StyledModalContainer>
  )
}
