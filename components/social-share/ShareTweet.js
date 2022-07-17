import SocialIcon from '@/components/social-icons'
import '../../styles/partials/Share.module.scss'

export default function ShareTweet({ url, title }) {
	const intentUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title} by @letsbsocial1`
	return <SocialIcon kind="twitter" href={intentUrl} size="6" />
}
