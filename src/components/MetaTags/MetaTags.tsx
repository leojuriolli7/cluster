import React, { useMemo } from 'react'
import Head from 'next/head'
import useThemeStore from '@state/theme/theme'

type Props = {
  title?: string
  description?: string
}

const MetaTags: React.FC<Props> = ({ title, description }) => {
  const { theme } = useThemeStore()
  const isSSR = typeof window === 'undefined'

  const DEFAULT_DESCRIPTION = 'A forum to discuss anything.'
  const DEFAULT_URL = isSSR
    ? 'https://cluster-forum.com/'
    : window.location.href

  const formattedTitle = useMemo(() => {
    if (title) return `Cluster | ${title}`

    return 'Cluster'
  }, [title])

  const currentDescription = description || DEFAULT_DESCRIPTION

  return (
    <Head>
      <title>{formattedTitle}</title>
      <link rel="icon" href="/assets/manifest/cluster-192-maskable.png" />
      <meta name="title" content={formattedTitle} />
      <meta name="description" content={currentDescription} />
      <meta name="color-scheme" content={theme ?? 'normal'} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={DEFAULT_URL} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta
        property="og:image"
        content="/assets/manifest/cluster-192-maskable.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={DEFAULT_URL} />
      <meta property="twitter:title" content={formattedTitle} />
      <meta property="twitter:description" content={currentDescription} />
      <meta
        property="twitter:image"
        content="/assets/manifest/cluster-192-maskable.png"
      />
    </Head>
  )
}

export default MetaTags
