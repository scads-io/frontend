import * as Sentry from '@sentry/react'
import { Dispatch } from '@reduxjs/toolkit'
import { resetUserState } from 'state/global/actions'
import { PREDICTION_TOOLTIP_DISMISS_KEY } from 'config/constants'
import { connectorLocalStorageKey } from 'components/WalletModal'
import getLocalStorageItemKeys from './getLocalStorageItemKeys'

export const clearUserStates = (dispatch: Dispatch<any>, chainId: number, isDeactive = false) => {
  dispatch(resetUserState({ chainId }))
  Sentry.configureScope((scope) => scope.setUser(null))
  // Only clear localStorage when user disconnect,switch address no need clear it.
  if (isDeactive) {
    window?.localStorage?.removeItem(connectorLocalStorageKey)
  }
  const lsOrderKeys = getLocalStorageItemKeys('gorders_')
  lsOrderKeys.forEach((lsOrderKey) => window?.localStorage?.removeItem(lsOrderKey))
  window?.localStorage?.removeItem(PREDICTION_TOOLTIP_DISMISS_KEY)
}
