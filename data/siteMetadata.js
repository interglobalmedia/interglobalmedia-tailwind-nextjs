const siteMetadata = {
	title: 'Inter-Global Media Network, Inc.',
	author: 'Maria D. Campbell',
	authorNickName: 'interglobalmedia',
	authorFirstName: 'Maria',
	domain: 'interglobalmedianetwork.com',
	headerTitle: 'Inter-Global Media',
	headerTitleFull: 'Inter-Global Media Network, Inc.',
	description: `Inter-Global Media Network designs, develops, trains, coaches, mentors, and teaches tech related experiences and online courses that make people's lives simpler and transforming the way to teach tech.`,
	keywords:
		'CSS3, CSS Flexbox, Command Line Interface, CSS Grid, Embedded JavaScript, ECMAScript 6 Plus, ES6 Modules, Express.js, Snagit screen capture and recording software, macWhisper transcription technology for macOS, Git, Github, Heroku, HTML5, JetBrains, Jira, Modern JavaScript, MongoDB, Netlify, Netlify CMS, Node.js, NPM, Stylelint, HTMLHint, ESLint, Husky, PostreSQL, Python 3.11+, Django, React, SASS (SCSS), Webpack, SQL, macOS, Windows OS, technical Writing, Presentation creation using reveal.js, reveal.md, and Marp, Online Course Development and Creation, and more',
	language: 'en-us',
	theme: 'system', // system, dark or light
	siteUrl: 'https:www.interglobalmnedianetwork.com',
	siteRepo:
		'https://github.com/interglobalmedia/interglobalmedia-tailwind-nextjs',
	siteLogo: '/static/images/logo.png',
	image: '/static/images/avatar.png',
	socialBanner: '/static/images/twitter-card.png',
	email: 'interglobalmedia@interglobalmedianetwork.com',
	github: 'https://github.com/interglobalmedia',
	twitter: 'https://twitter.com/letsbsocial1',
	twitterHandle: '@letsbsocial1',
	redditHandle: 'interglobalmedia1',
	facebook: 'https://www.facebook.com/interglobalmedia/',
	youtube: 'https://www.youtube.com/user/letsbsocial1',
	linkedin: 'https://www.linkedin.com/in/mariacampbell/',
	instagram: 'https://www.instagram.com/letsbsocial/',
	sitemap: '/sitemap.xml',
	locale: 'en-US',
	category: '/categories',
	tag: '/tags',
	views: 'views',
	analytics: {
		// If you want to use an analytics provider you have to add it to the
		// content security policy in the `next.config.js` file.
		// supports plausible, simpleAnalytics, umami or googleAnalytics
		plausibleDataDomain: 'interglobalmedianetwork.com', // e.g. tailwind-nextjs-starter-blog.vercel.app
		simpleAnalytics: false, // true or false
		umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
		googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	},
	newsletter: {
		// supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
		// Please add your .env file and modify it according to your selection
		provider: 'convertkit',
	},
	comment: {
		// If you want to use a commenting system other than giscus you have to add it to the
		// content security policy in the `next.config.js` file.
		// Select a provider and use the environment variables associated to it
		// https://vercel.com/docs/environment-variables
		provider: 'giscus', // supported providers: giscus, utterances, disqus
		giscusConfig: {
			// Visit the link below, and follow the steps in the 'configuration' section
			// https://giscus.app/
			repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
			repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
			category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
			categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
			mapping: 'pathname', // supported options: pathname, url, title
			reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
			// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
			metadata: '0',
			// theme example: light, dark, dark_dimmed, dark_high_contrast
			// transparent_dark, preferred_color_scheme, custom
			theme: 'light',
			// Place the comment box above the comments. options: bottom, top
			inputPosition: 'bottom',
			// Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
			lang: 'en',
			// theme when dark mode
			darkTheme: 'transparent_dark',
			// If the theme option above is set to 'custom`
			// please provide a link below to your custom theme css file.
			// example: https://giscus.app/themes/custom_example.css
			themeURL: '',
		},
		utterancesConfig: {
			// Visit the link below, and follow the steps in the 'configuration' section
			// https://utteranc.es/
			repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
			issueTerm: '', // supported options: pathname, url, title
			label: '', // label (optional): Comment 💬
			// theme example: github-light, github-dark, preferred-color-scheme
			// github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
			theme: '',
			// theme when dark mode
			darkTheme: '',
		},
		disqusConfig: {
			// https://help.disqus.com/en/articles/1717111-what-s-a-shortname
			shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
		},
	},
}

module.exports = siteMetadata
