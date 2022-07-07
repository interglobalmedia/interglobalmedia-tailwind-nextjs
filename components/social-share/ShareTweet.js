import SocialIcon from '@/components/social-icons'
import '../../styles/partials/Share.module.scss'

export default function ShareTweet({ url, title }) {
  const text = `I just read an article about ${title} by @letsbsocial1`
  const intentUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(text)}%0A%0A`
  return <SocialIcon kind="twitter" href={intentUrl} size="6" />
}
