import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import 'styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { Toaster } from 'react-hot-toast'
import createEmotionCache from 'utils/createEmotionCache'
// import { QueryClient, QueryClientProvider } from 'react-query'

// const queryClient = new QueryClient()

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <Toaster />
      <CssBaseline />
      <Component {...pageProps} />
      {/* </QueryClientProvider> */}
    </CacheProvider>
  )
}
