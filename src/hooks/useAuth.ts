import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { useAppDispatch } from 'state'
import { useConnect, useDisconnect, useNetwork, ConnectorNotFoundError, UserRejectedRequestError } from 'wagmi'
import { useTranslation } from 'contexts/Localization'
import { connectorLocalStorageKey, ConnectorNames } from 'components/WalletModal'
import { clearUserStates } from '../utils/clearUserStates'
import useActiveWeb3React from './useActiveWeb3React'

const useAuth = () => {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()
  const { connectAsync, connectors } = useConnect()
  const { chain } = useNetwork()
  const { disconnect } = useDisconnect()

  const login = useCallback(
    async (connectorID: ConnectorNames) => {
      const findConnector = connectors.find((c) => c.id === connectorID)
      try {
        await connectAsync({ connector: findConnector, chainId })
      } catch (error) {
        console.error(error)
        window?.localStorage?.removeItem(connectorLocalStorageKey)
        if (error instanceof ConnectorNotFoundError) {
          toast.error(t('Provider Error'))
          return
        }
        if (error instanceof UserRejectedRequestError) {
          return
        }
        if (error instanceof Error) {
          toast.error(t('Please authorize to access your account'))
        }
      }
    },
    [connectors, connectAsync, chainId, t],
  )

  const logout = useCallback(() => {
    disconnect()
    clearUserStates(dispatch, chain?.id)
  }, [disconnect, dispatch, chain?.id])

  return { login, logout }
}

export default useAuth
