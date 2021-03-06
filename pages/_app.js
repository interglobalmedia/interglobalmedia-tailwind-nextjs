import '@/styles/tailwind.scss'
import '@/styles/prism.scss'
import 'katex/dist/katex.css'
import 'react-static-tweets/styles.css'
import '@/styles/styles.scss'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/containers/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { motion } from 'framer-motion'
import PlausibleProvider from 'next-plausible'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
}

export default function App({ Component, pageProps, router }) {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
				<Head>
					<meta
						content="width=device-width, initial-scale=1"
						name="viewport"
					/>
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
						<PlausibleProvider domain="interglobalmedianetwork.com">
							<Component {...pageProps} />
						</PlausibleProvider>
					</motion.div>
				</LayoutWrapper>
			</ThemeProvider>
		</>
	)
}
