export interface Language {
  code: string
  language: string
  locale: string
}

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const RU: Language = { locale: 'ru-RU', language: 'Русский', code: 'ru' }
/* export const UK: Language = { locale: 'uk-UA', language: 'Українська', code: 'uk' } */

export const languages = {
  'en-US': EN,
  'ru-RU': RU,
  /* 'uk-UA': UK, */
}

export const languageList = Object.values(languages)
