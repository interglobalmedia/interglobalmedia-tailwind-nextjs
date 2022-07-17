import SocialIcon from '@/components/social-icons'
import '../../styles/partials/Share.module.scss'

export default function ShareFB({ url }) {
	const intentUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
	return <SocialIcon kind="facebook" href={intentUrl} size="6" />
}
