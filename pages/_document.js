import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" className="scroll-smooth">
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/static/favicons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/static/favicons/favicon-16x16.png"
					/>
					<link
						rel="manifest"
						href="/static/favicons/site.webmanifest"
					/>
					<link
						rel="mask-icon"
						href="/static/favicons/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
					<meta name="msapplication-TileColor" content="#000000" />
					<meta name="theme-color" content="#000000" />
					<link
						rel="alternate"
						type="application/rss+xml"
						href="/feed.xml"
					/>
					{typeof window !== 'undefined' &&
						window.location.hostname === 'johnschmidt.de' && (
							<script
								async
								defer
								data-domain="interglobalmedianetwork.com"
								src="https://stats.interglobalmedianetwork.com/js/plausible.js"
							/>
						)}
					<script
						dangerouslySetInnerHTML={{
							__html: 'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
						}}
					/>
				</Head>
				<body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}
}

export default MyDocument
