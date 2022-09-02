import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/containers/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import '../styles/partials/Faqs.module.scss'

export default function SkillsLayout({ children, frontMatter }) {
	const { pageTitle } = frontMatter
	return (
		<SectionContainer>
			<PageSEO
				title={`Skills - ${siteMetadata.headerTitleFull}`}
				description={`Skills - about ${siteMetadata.headerTitleFull}`}
			/>
			<main className="divide-y">
				<div className="skills-page-title-wrapper space-y-2 pt-6 pb-8 md:space-y-5">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						{pageTitle}
					</h1>
					<div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
						<div className="skills-heading prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-4">
							{children}
						</div>
					</div>
				</div>
			</main>
		</SectionContainer>
	)
}
