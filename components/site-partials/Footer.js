import Link from '../Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import '../../styles/partials/Footer.module.scss'

export default function Footer() {
	return (
		<footer className="site-footer bg-secondary">
			<div className="mt-16 flex flex-col items-center">
				<div className="mb-3 flex space-x-4">
					<SocialIcon kind="tag" href={siteMetadata.tag} size="6" />
					<SocialIcon
						kind="category"
						href={siteMetadata.category}
						size="6"
					/>
					<SocialIcon
						kind="sitemap"
						href={siteMetadata.sitemap}
						size="6"
					/>
				</div>
				<div className="mb-3 flex space-x-4">
					<SocialIcon
						kind="mail"
						href={`mailto:${siteMetadata.email}`}
						size="6"
					/>
					<SocialIcon
						kind="github"
						href={siteMetadata.github}
						size="6"
					/>
					<SocialIcon
						kind="facebook"
						href={siteMetadata.facebook}
						size="6"
					/>
					<SocialIcon
						kind="youtube"
						href={siteMetadata.youtube}
						size="6"
					/>
					<SocialIcon
						kind="linkedin"
						href={siteMetadata.linkedin}
						size="6"
					/>
					<SocialIcon
						kind="twitter"
						href={siteMetadata.twitter}
						size="6"
					/>
				</div>
				<div className="mb-2 flex flex-col items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
					{`© ${new Date().getFullYear()}`} {` • `}{' '}
					{siteMetadata.author}
					<Link href="/">{siteMetadata.title}</Link>
				</div>
			</div>
		</footer>
	)
}
