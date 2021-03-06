const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  script-src 'self' 'unsafe-eval' 'unsafe-inline' plausible.io giscus.app;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
  frame-src giscus.app;
`

const securityHeaders = [
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\n/g, ''),
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()',
	},
]

const webpack = require('webpack')

const dotenv = require('dotenv')

dotenv.config()

module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	images: {
		domains: ['pbs.twimg.com'],
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	eslint: {
		dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
		]
	},
	webpack: (config, { dev, isServer }) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		if (!dev && !isServer) {
			// Replace React with Preact only in client production build
			Object.assign(config.resolve.alias, {
				'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			})
		}

		config.plugins.push(
			new webpack.EnvironmentPlugin(
				'NEXT_PUBLIC_CONVERTKIT_API_URL',
				'NEXT_PUBLIC_CONVERTKIT_API_KEY',
				'NEXT_PUBLIC_CONVERTKIT_FORM_ID',
				'NEXT_PUBLIC_GISCUS_REPO',
				'NEXT_PUBLIC_GISCUS_REPOSITORY_ID',
				'NEXT_PUBLIC_GISCUS_CATEGORY',
				'NEXT_PUBLIC_PLAUSIBLE_API_KEY',
			),
		)

		return config
	},
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
})
