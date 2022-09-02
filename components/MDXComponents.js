/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import Pexels from './figure/Pexels'
import Unsplash from './figure/Unsplash'
import Interglobalmedia from './figure/Interglobalmedia'
import { Tweet } from 'react-static-tweets'
import StaticTextTweet from './static-tweet/StaticTextTweet'
import TextTweetEmbed from './static-tweet/TextTweetEmbed'
import Skills from './Skills'

export const MDXComponents = {
	Image,
	TOCInline,
	a: CustomLink,
	pre: Pre,
	BlogNewsletterForm: BlogNewsletterForm,
	Pexels: Pexels,
	Unsplash: Unsplash,
	Interglobalmedia: Interglobalmedia,
	StaticTextTweet: StaticTextTweet,
	TextTweetEmbed: TextTweetEmbed,
	Tweet: Tweet,
	Skills: Skills,
	wrapper: ({ components, layout, ...rest }) => {
		const Layout = require(`../layouts/${layout}`).default
		return <Layout {...rest} />
	},
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
	const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

	return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
