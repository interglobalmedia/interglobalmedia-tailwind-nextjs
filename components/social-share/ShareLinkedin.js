import SocialIcon from '@/components/social-icons'
import '../../styles/partials/Share.module.scss'

export default function ShareLinkedin({ url, title }) {
  const text = `I just read an article about ${title} by mariacampbell`
  const intentUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(text)}%0A%0A`
  return <SocialIcon kind="linkedin" href={intentUrl} size="6" />
}
