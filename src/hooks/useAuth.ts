import { useWeb3React } from '@scads-io/wagmi'
import { useCallback } from 'react'
import { useAppDispatch } from 'state'
import { mutate } from 'swr'
import { useConnect, useDisconnect, useNetwork, ConnectorNotFoundError, UserRejectedRequestError } from 'wagmi'
import { useTranslation } from 'contexts/Localization'
import { connectorLocalStorageKey, ConnectorNames } from 'components/WalletModal'
import { clearUserStates } from '../utils/clearUserStates'
import useToast from './useToast'

const useAuth = () => {
  const { t } = useTranslation()
  const web3React = useWeb3React()
  const { chainId } = web3React
  const dispatch = useAppDispatch()
  const { connectAsync, connectors } = useConnect()
  const { chain } = useNetwork()
  const { disconnect } = useDisconnect()
  const { toastError } = useToast()

  const login = useCallback(
    async (connectorID: ConnectorNames) => {
      const findConnector = connectors.find((c) => c.id === connectorID)
      try {
        await connectAsync({ connector: findConnector, chainId })
      } catch (error) {
        console.error(error)
        window?.localStorage?.removeItem(connectorLocalStorageKey)
        if (error instanceof ConnectorNotFoundError) {
          toastError(
            t('Provider Error')
          )
          return
        }
        if (error instanceof UserRejectedRequestError) {
          return
        }
        if (error instanceof Error) {
          toastError(error.message, t('Please authorize to access your account'))
        }
      }
    },
    [connectors, connectAsync, chainId, toastError, t],
  )

  const logout = useCallback(() => {
    disconnect()
    clearUserStates(dispatch, chain?.id)
  }, [disconnect, dispatch, chain?.id])

  return { login, logout }
}

export default useAuth
