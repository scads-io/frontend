import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router'
import { DEFAULT_META, getCustomMeta } from 'config/constants/meta'

export const PageMeta: React.FC<{ symbol?: string }> = ({ symbol }) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const pageMeta = getCustomMeta(pathname, t) || {}
  const { title, description, image } = { ...DEFAULT_META, ...pageMeta }

  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
    </Helmet>
  )
}