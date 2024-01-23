import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ScadsSwap',
  description:'Discover SCADS: The New Secured, Self-Sustained Algorithm!',
  image: '/logo.webp',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ScadsSwap')}`,
      }
    case '/news':
      return {
        title: `${t('News')} | ${t('ScadsSwap')}`,
      }
    case '/invest':
      return {
        title: `${t('Invest')} | ${t('ScadsSwap')}`,
      }
    case '/roadmap':
      return {
        title: `${t('Roadmap')} | ${t('ScadsSwap')}`,
      }
    case '/usecases':
      return {
        title: `${t('Use Cases')} | ${t('ScadsSwap')}`,
      }
    case '/whitepaper':
      return {
        title: `${t('Whitepaper')} | ${t('ScadsSwap')}`,
      }
    case '/howto':
      return {
        title: `${t('How To')} | ${t('ScadsSwap')}`,
      }
    case '/story':
      return {
        title: `${t('Our story')} | ${t('ScadsSwap')}`,
      }
    case '/gitbook':
      return {
        title: `${t('Coming soon')} | ${t('ScadsSwap')}`,
      }
    default:
      return {
        title: `${t('Oops, page not found')} | ${t('ScadsSwap')}`,
      }
  }
}
