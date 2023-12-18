import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileState, ProfileAvatarFetchStatus, Profile } from 'state/types'
import { getProfile, getProfileAvatar, getUsername } from './helpers'

export const initialState: ProfileState = {
  isInitialized: false,
  isLoading: false,
  hasRegistered: false,
  data: null,
  profileAvatars: {},
}

export const fetchProfile = createAsyncThunk<{ hasRegistered: boolean; profile?: Profile }, string>(
  'profile/fetchProfile',
  async (account) => {
    const { hasRegistered, profile } = await getProfile(account)
    return { hasRegistered, profile }
  },
)

export const fetchProfileAvatar = createAsyncThunk<{ account: string; hasRegistered: boolean }, string>(
  'profile/fetchProfileAvatar',
  async (account) => {
    const { hasRegistered } = await getProfileAvatar(account)
    return { account, hasRegistered }
  },
)

export const fetchProfileUsername = createAsyncThunk<
  { account: string; username: string },
  { account: string; hasRegistered: boolean }
>('profile/fetchProfileUsername', async ({ account, hasRegistered }) => {
  if (!hasRegistered) {
    return { account, username: '' }
  }
  const username = await getUsername(account)
  return { account, username }
})

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileClear: () => ({
      ...initialState,
      isLoading: false,
    }),
    addPoints: (state, action: PayloadAction<number>) => {
      state.data.points += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      const { hasRegistered, profile } = action.payload

      state.isInitialized = true
      state.isLoading = false
      state.hasRegistered = hasRegistered
      state.data = profile
    })
    builder.addCase(fetchProfile.rejected, (state) => {
      state.isLoading = false
      state.isInitialized = true
    })
    builder.addCase(fetchProfileUsername.pending, (state, action) => {
      const { account } = action.meta.arg
      if (state.profileAvatars[account]) {
        state.profileAvatars[account] = {
          ...state.profileAvatars[account],
          usernameFetchStatus: ProfileAvatarFetchStatus.FETCHING,
        }
      } else {
        state.profileAvatars[account] = {
          hasRegistered: false,
          username: null,
          // I think in theory this else should never be reached since we only check for username after we checked for profile/avatar
          // just in case I set isFetchingAvatar will be ProfileAvatarFetchStatus.FETCHED at this point to avoid refetching
          usernameFetchStatus: ProfileAvatarFetchStatus.FETCHING,
          avatarFetchStatus: ProfileAvatarFetchStatus.FETCHED,
        }
      }
    })
    builder.addCase(fetchProfileUsername.fulfilled, (state, action) => {
      const { account, username } = action.payload

      if (state.profileAvatars[account]) {
        state.profileAvatars[account] = {
          ...state.profileAvatars[account],
          username,
          usernameFetchStatus: ProfileAvatarFetchStatus.FETCHED,
        }
      } else {
        state.profileAvatars[account] = {
          username,
          hasRegistered: true,
          usernameFetchStatus: ProfileAvatarFetchStatus.FETCHED,
          // I think in theory this else should never be reached since we only check for username after we checked for profile/avatar
          // just in case I set isFetchingAvatar will be ProfileAvatarFetchStatus.FETCHED at this point to avoid refetching
          avatarFetchStatus: ProfileAvatarFetchStatus.FETCHED,
        }
      }
    })
    builder.addCase(fetchProfileUsername.rejected, (state, action) => {
      const { account } = action.meta.arg
      if (state.profileAvatars[account]) {
        state.profileAvatars[account] = {
          ...state.profileAvatars[account],
          username: '',
          usernameFetchStatus: ProfileAvatarFetchStatus.FETCHED,
        }
      } else {
        state.profileAvatars[account] = {
          hasRegistered: false,
          username: '',
          usernameFetchStatus: ProfileAvatarFetchStatus.FETCHED,
          avatarFetchStatus: ProfileAvatarFetchStatus.FETCHED,
        }
      }
    })
    builder.addCase(fetchProfileAvatar.pending, (state, action) => {
      const account = action.meta.arg
      if (state.profileAvatars[account]) {
        state.profileAvatars[account] = {
          ...state.profileAvatars[account],
          hasRegistered: false,
          avatarFetchStatus: ProfileAvatarFetchStatus.FETCHING,
        }
      } else {
        state.profileAvatars[account] = {
          username: null,
          hasRegistered: false,
          usernameFetchStatus: ProfileAvatarFetchStatus.NOT_FETCHED,
          avatarFetchStatus: ProfileAvatarFetchStatus.FETCHING,
        }
      }
    })
    builder.addCase(fetchProfileAvatar.fulfilled, (state, action) => {
      const { account, hasRegistered } = action.payload

      if (state.profileAvatars[account]) {
        state.profileAvatars[account] = {
          ...state.profileAvatars[account],
          hasRegistered,
          avatarFetchStatus: ProfileAvatarFetchStatus.FETCHED,
        }
      } else {
        state.profileAvatars[account] = {
          username: null,
          hasRegistered,
          usernameFetchStatus: ProfileAvatarFetchStatus.NOT_FETCHED,
          avatarFetchStatus: ProfileAvatarFetchStatus.FETCHED,
        }
      }
    })
    builder.addCase(fetchProfileAvatar.rejected, (state, action) => {
      const account = action.meta.arg

      if (state.profileAvatars[account]) {
        state.profileAvatars[account] = {
          ...state.profileAvatars[account],
          hasRegistered: false,
          avatarFetchStatus: ProfileAvatarFetchStatus.FETCHED,
        }
      } else {
        state.profileAvatars[account] = {
          username: null,
          hasRegistered: false,
          usernameFetchStatus: ProfileAvatarFetchStatus.NOT_FETCHED,
          avatarFetchStatus: ProfileAvatarFetchStatus.FETCHED,
        }
      }
    })
  },
})

// Actions
export const { profileClear, addPoints } = profileSlice.actions

export default profileSlice.reducer
