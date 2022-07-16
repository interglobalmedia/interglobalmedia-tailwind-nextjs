/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import Pexels from './Pexels'
import Unsplash from './Unsplash'
import Interglobalmedia from './Interglobalmedia'

export const MDXComponents = {
	Image,
	TOCInline,
	a: CustomLink,
	pre: Pre,
	BlogNewsletterForm: BlogNewsletterForm,
	Pexels: Pexels,
	Unsplash: Unsplash,
	Interglobalmedia: Interglobalmedia,
	wrapper: ({ components, layout, ...rest }) => {
		const Layout = require(`../layouts/${layout}`).default
		return <Layout {...rest} />
	},
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
	const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

	return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
