import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import '../../styles/partials/Share.module.scss'

export default function ShareReddit({ url, title }) {
	const text = `I just read an article about "${title}" by ${siteMetadata.redditHandle} on ${siteMetadata.domain}`
	const intentUrl = `https://www.reddit.com/submit?title=${title}&url=${url}&text=${text}`
	return <SocialIcon kind="reddit" href={intentUrl} size="6" />
}
