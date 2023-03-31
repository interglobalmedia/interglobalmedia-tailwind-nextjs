import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Tooltip from '@/components/site-partials/tooltip/Tooltip'
import '../../styles/partials/Footer.module.scss'

export default function Footer() {
	return (
		<footer className="site-footer bg-secondary">
			<div className="mt-16 flex flex-col items-center">
				<div className="mb-3 flex flex-wrap space-x-6">
					<Tooltip content="tags" direction="top">
						<SocialIcon
							kind="tag"
							href={siteMetadata.tag}
							size="6"
						/>
					</Tooltip>
					<Tooltip content="categories" direction="top">
						<SocialIcon
							kind="category"
							href={siteMetadata.category}
							size="6"
							tooltip="Go to category page"
						/>
					</Tooltip>
					<Tooltip content="sitemap" direction="top">
						<SocialIcon
							kind="sitemap"
							href={siteMetadata.sitemap}
							size="6"
						/>
					</Tooltip>
					<Tooltip content="email me" direction="top">
						<SocialIcon
							kind="mail"
							href={`mailto:${siteMetadata.email}`}
							size="6"
						/>
					</Tooltip>
					<Tooltip content="follow on github" direction="top">
						<SocialIcon
							kind="github"
							href={siteMetadata.github}
							size="6"
						/>
					</Tooltip>
					<Tooltip content="follow on facebook" direction="top">
						<SocialIcon
							kind="facebook"
							href={siteMetadata.facebook}
							size="6"
						/>
					</Tooltip>
					<Tooltip content="follow on youtube" direction="top">
						<SocialIcon
							kind="youtube"
							href={siteMetadata.youtube}
							size="6"
						/>
					</Tooltip>
					<Tooltip content="connect on linkedin" direction="top">
						<SocialIcon
							kind="linkedin"
							href={siteMetadata.linkedin}
							size="6"
						/>
					</Tooltip>
					<Tooltip content="follow on twitter" direction="top">
						<SocialIcon
							kind="twitter"
							href={siteMetadata.twitter}
							size="6"
						/>
					</Tooltip>
				</div>
				<div className="site-footer mb-2 flex flex-col items-center space-x-2 text-gray-500 dark:text-gray-400">
					{`© ${new Date().getFullYear()}`} {` • `}{' '}
					{siteMetadata.author}
					<Link href="/">{siteMetadata.title}</Link>
				</div>
			</div>
		</footer>
	)
}
