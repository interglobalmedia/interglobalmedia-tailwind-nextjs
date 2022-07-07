import '@/styles/tailwind.scss'
import '@/styles/prism.scss'
import 'katex/dist/katex.css'
import '@/styles/styles.scss'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '@/lib/ga'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function App({ Component, pageProps, router }) {
  router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url, document.title)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        <Analytics />
        <LayoutWrapper>
          <motion.div
            key={router.route}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <Component {...pageProps} />
          </motion.div>
        </LayoutWrapper>
      </ThemeProvider>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_UNIVERSAL_ANALYTICS_TRACKING_ID}`}
      />
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_UNIVERSAL_ANALYTICS_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
