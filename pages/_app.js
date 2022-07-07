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

import { GA_TRACKING_ID, pageview } from '@/lib/gtag'
import Script from 'next/script'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function App({ Component, pageProps, router }) {
  const pageRouter = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url, document.title)
    }
    pageRouter.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      pageRouter.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
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
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
        }}
      />
    </>
  )
}
