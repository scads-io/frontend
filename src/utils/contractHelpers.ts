import { ethers } from 'ethers'
import { simpleRpcProvider } from 'utils/providers'
import tokens from 'config/constants/tokens'

// Addresses
import {
  getScadsProfileAddress,
  getMasterChefAddress,
  getMulticallAddress,
  getScadsAddress,
  getCaratAddress,
  getScadsPoolAddress,
  getCaratPoolAddress,
} from 'utils/addressHelpers'

// ABI
import profileABI from 'config/abi/scadsProfile.json'
import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import cakeAbi from 'config/abi/cake.json'
import masterChef from 'config/abi/masterchef.json'
import MultiCallAbi from 'config/abi/Multicall.json'
import scadsAbi from 'config/abi/scadsContract.json'
import caratAbi from 'config/abi/caratContract.json'
import scadsPoolAbi from 'config/abi/scadsPool.json'
import caratPoolAbi from 'config/abi/caratPool.json'
import { ScadsProfileContract } from './types'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bep20Abi, address, signer)
}
export const getErc721Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(erc721Abi, address, signer)
}
export const getCakeContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(cakeAbi, tokens.cake.address, signer)
}
export const getProfileContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(profileABI, getScadsProfileAddress(), signer) as ScadsProfileContract
}
export const getMasterchefContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(masterChef, getMasterChefAddress(), signer)
}
export const getMulticallContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer)
}
export const getScadsContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(scadsAbi, getScadsAddress(), signer)
}
export const getCaratContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(caratAbi, getCaratAddress(), signer)
}
export const getScadsPoolContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(scadsPoolAbi, getScadsPoolAddress(), signer)
}
export const getCaratPoolContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(caratPoolAbi, getCaratPoolAddress(), signer)
}
