import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import '../../styles/partials/Share.module.scss'

export default function ShareTweet({ url, title }) {
	const text = `I just read an article about`
	const intentUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text} "${title}" by ${siteMetadata.twitterHandle} on ${siteMetadata.domain}`
	return <SocialIcon kind="twitter" href={intentUrl} size="6" />
}
