import ethers, { Contract, ContractFunction } from 'ethers'

export type MultiCallResponse<T> = T | null

// Profile contract
// [userId, points, teamId, tokenId, collectionAddress isActive]
export type GetUserProfileResponse = [
  ethers.BigNumber,
  ethers.BigNumber,
  ethers.BigNumber,
  string,
  ethers.BigNumber,
  boolean,
]

export interface ScadsProfileContract extends Contract {
  getUserProfile: ContractFunction<GetUserProfileResponse>
  hasRegistered: ContractFunction<boolean>
}
