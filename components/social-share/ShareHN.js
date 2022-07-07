import SocialIcon from '@/components/social-icons'
import '../../styles/partials/Share.module.scss'

export default function ShareHN({ url, title }) {
  const text = `I just read an article about ${title} by interglobalmedia`
  const intentUrl = `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(text)}%0A%0A`
  return <SocialIcon kind="hackernews" href={intentUrl} size="6" />
}
