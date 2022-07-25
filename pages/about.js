import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import ScrollTop from '@/components/buttons/ScrollTop'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
	const authorDetails = await getFileBySlug('authors', ['default'])
	return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
	const { mdxSource, frontMatter } = authorDetails

	return (
		<>
			<ScrollTop />
			<MDXLayoutRenderer
				layout={frontMatter.layout || DEFAULT_LAYOUT}
				mdxSource={mdxSource}
				frontMatter={frontMatter}
			/>
		</>
	)
}
