import { createReducer } from '@reduxjs/toolkit'
import { SerializedToken } from 'config/constants/types'
import { DEFAULT_DEADLINE_FROM_NOW, INITIAL_ALLOWED_SLIPPAGE } from '../../config/constants'
import { updateVersion } from '../global/actions'
import {
  addSerializedToken,
  removeSerializedToken,
  toggleTheme,
  updateUserSingleHopOnly,
  updateUserSlippageTolerance,
} from './actions'
import { GAS_PRICE_GWEI } from './hooks/helpers'

const currentTimestamp = () => new Date().getTime()

export interface UserState {
  // the timestamp of the last updateVersion action
  lastUpdateVersionTimestamp?: number

  userExpertMode: boolean

  // only allow swaps on direct pairs
  userSingleHopOnly: boolean

  // user defined slippage tolerance in bips, used in all txns
  userSlippageTolerance: number

  // deadline set by user in minutes, used in all txns
  userDeadline: number

  tokens: {
    [chainId: number]: {
      [address: string]: SerializedToken
    }
  }

  timestamp: number
  audioPlay: boolean
  isDark: boolean
  isExchangeChartDisplayed: boolean
  isSubgraphHealthIndicatorDisplayed: boolean
  userPoolStakedOnly: boolean
  userPredictionAcceptedRisk: boolean
  userPredictionChartDisclaimerShow: boolean
  userExpertModeAcknowledgementShow: boolean
  userUsernameVisibility: boolean
  gasPrice: string
  watchlistTokens: string[]
  watchlistPools: string[]
  showPhishingWarningBanner: boolean
}

export const initialState: UserState = {
  userExpertMode: false,
  userSingleHopOnly: false,
  userSlippageTolerance: INITIAL_ALLOWED_SLIPPAGE,
  userDeadline: DEFAULT_DEADLINE_FROM_NOW,
  tokens: {},
  timestamp: currentTimestamp(),
  audioPlay: true,
  isDark: true,
  isExchangeChartDisplayed: true,
  isSubgraphHealthIndicatorDisplayed: false,
  userPoolStakedOnly: false,
  userPredictionAcceptedRisk: false,
  userPredictionChartDisclaimerShow: true,
  userExpertModeAcknowledgementShow: true,
  userUsernameVisibility: false,
  gasPrice: GAS_PRICE_GWEI.default,
  watchlistTokens: [],
  watchlistPools: [],
  showPhishingWarningBanner: true,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateVersion, (state) => {
      // slippage isnt being tracked in local storage, reset to default
      // noinspection SuspiciousTypeOfGuard
      if (typeof state.userSlippageTolerance !== 'number') {
        state.userSlippageTolerance = INITIAL_ALLOWED_SLIPPAGE
      }

      // deadline isnt being tracked in local storage, reset to default
      // noinspection SuspiciousTypeOfGuard
      if (typeof state.userDeadline !== 'number') {
        state.userDeadline = DEFAULT_DEADLINE_FROM_NOW
      }

      state.lastUpdateVersionTimestamp = currentTimestamp()
    })
    .addCase(updateUserSlippageTolerance, (state, action) => {
      state.userSlippageTolerance = action.payload.userSlippageTolerance
      state.timestamp = currentTimestamp()
    })
    .addCase(updateUserSingleHopOnly, (state, action) => {
      state.userSingleHopOnly = action.payload.userSingleHopOnly
    })
    .addCase(addSerializedToken, (state, { payload: { serializedToken } }) => {
      if (!state.tokens) {
        state.tokens = {}
      }
      state.tokens[serializedToken.chainId] = state.tokens[serializedToken.chainId] || {}
      state.tokens[serializedToken.chainId][serializedToken.address] = serializedToken
      state.timestamp = currentTimestamp()
    })
    .addCase(removeSerializedToken, (state, { payload: { address, chainId } }) => {
      if (!state.tokens) {
        state.tokens = {}
      }
      state.tokens[chainId] = state.tokens[chainId] || {}
      delete state.tokens[chainId][address]
      state.timestamp = currentTimestamp()
    })
    .addCase(toggleTheme, (state) => {
      state.isDark = !state.isDark
    })
)
