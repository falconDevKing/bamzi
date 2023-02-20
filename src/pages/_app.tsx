import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import 'styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { Toaster } from 'react-hot-toast'
import createEmotionCache from 'utils/createEmotionCache'
import { SessionProvider } from 'next-auth/react'
import AuthGuard from 'components/auth/AuthGuard'
import type { NextComponentType } from 'next'
import UnAuthGuard from 'components/auth/UnAuthGuard'
// import { QueryClient, QueryClientProvider } from 'react-query'
// const queryClient = new QueryClient()

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

type CustomAppProps = MyAppProps & {
  Component: NextComponentType & { auth?: boolean }
}

export default function MyApp(props: CustomAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props
  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={session}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {/* <QueryClientProvider client={queryClient}> */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Toaster />
        <CssBaseline />
        {Component.auth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <UnAuthGuard>
            <Component {...pageProps} />
          </UnAuthGuard>
        )}
        {/* </QueryClientProvider> */}
      </SessionProvider>
    </CacheProvider>
  )
}
