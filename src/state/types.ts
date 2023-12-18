import { ThunkAction } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, AnyAction>

export interface BigNumberToJson {
  type: 'BigNumber'
  hex: string
}

export type SerializedBigNumber = string

export interface Profile {
  userId: number
  points: number
  teamId: number
  collectionAddress: string
  tokenId: number
  isActive: boolean
  username: string
  hasRegistered: boolean
}

// Slices states

export enum ProfileAvatarFetchStatus {
  NOT_FETCHED = 'not-fetched',
  FETCHING = 'fetching',
  FETCHED = 'fetched',
}

export interface ProfileState {
  isInitialized: boolean
  isLoading: boolean
  hasRegistered: boolean
  data: Profile
  profileAvatars: {
    [key: string]: {
      username: string
      hasRegistered: boolean
      usernameFetchStatus: ProfileAvatarFetchStatus
      avatarFetchStatus: ProfileAvatarFetchStatus
    }
  }
}

// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}

// Global state

export interface State {
  block: BlockState
  profile: ProfileState
}
