import { ChainId } from '@scads/sdk'
import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getScadsProfileAddress = () => {
  return getAddress(addresses.scadsProfile)
}
export const getTreasuryAddress = () => {
  return getAddress(addresses.treasury)
}
export const getScadsAddress = () => {
  return getAddress(addresses.scads)
}
export const getCaratAddress = () => {
  return getAddress(addresses.carat)
}
export const getPulseAddress = () => {
  return getAddress(addresses.pulse)
}
export const getScadsPoolAddress = () => {
  return getAddress(addresses.scadsPool)
}
export const getCaratPoolAddress = () => {
  return getAddress(addresses.caratPool)
}
