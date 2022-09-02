import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import ScrollTop from '@/components/buttons/ScrollTop'

const DEFAULT_LAYOUT = 'SkillsLayout'

export async function getStaticProps() {
	const skillsDetails = await getFileBySlug('skills', ['default'])
	return { props: { skillsDetails } }
}

export default function Skills({ skillsDetails }) {
	const { mdxSource, frontMatter } = skillsDetails

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
