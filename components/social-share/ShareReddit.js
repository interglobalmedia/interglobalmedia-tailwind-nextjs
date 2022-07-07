import SocialIcon from '@/components/social-icons'
import '../../styles/partials/Share.module.scss'

export default function ShareReddit({ url, title }) {
  const text = `I just read an article about ${title} by interglobalmedia`
  const intentUrl = `https://www.reddit.com/submit?title=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(text)}%0A%0A`
  return <SocialIcon kind="reddit" href={intentUrl} size="6" />
}
