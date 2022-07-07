import SocialIcon from '@/components/social-icons'
import '../../styles/partials/Share.module.scss'

export default function ShareFB({ url, title }) {
  const text = `I just read an article about ${title} by interglobalmedia`
  const intentUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(text)}%0A%0A`
  return <SocialIcon kind="facebook" href={intentUrl} size="6" />
}
