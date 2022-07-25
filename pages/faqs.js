import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import ScrollTop from '@/components/buttons/ScrollTop'

const DEFAULT_LAYOUT = 'FaqsLayout'

export async function getStaticProps() {
	const faqsDetails = await getFileBySlug('faqs', ['default'])
	return { props: { faqsDetails } }
}

export default function Faqs({ faqsDetails }) {
	const { mdxSource, frontMatter } = faqsDetails

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
