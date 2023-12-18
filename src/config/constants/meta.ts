import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ScadsSwap',
  description:'Discover SCADS: The New Secured, Self-Sustained Algorithm!',
  image: '/images/logo.webp',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ScadsSwap')}`,
      }
    default:
      return null
  }
}
