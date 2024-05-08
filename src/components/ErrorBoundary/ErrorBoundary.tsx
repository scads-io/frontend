import React from 'react'
import * as Sentry from '@sentry/react'
import { useTranslation } from 'contexts/Localization'
import { Button, Text, InfoIcon, Flex } from '@scads-io/uikit'

export default function ErrorBoundary({ children }) {
  const { t } = useTranslation()
  return (
    <Sentry.ErrorBoundary
      fallback={() => {
        return (
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
              <InfoIcon width="64px" mb="8px" />
              <Text mb="16px">{t('Oops, something wrong.')}</Text>
              <Button onClick={() => window.location.reload()}>{t('Click here to reset!')}</Button>
          </Flex>
        )
      }}
    >
      {children}
    </Sentry.ErrorBoundary>
  )
}