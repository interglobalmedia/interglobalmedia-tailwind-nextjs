import Link from 'next/link'
import tagKebabCase from '@/lib/utils/tagKebabCase'
import '../styles/partials/Tag.module.scss'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${tagKebabCase(text)}`}>
      <a className="tag mr-3 text-sm font-medium capitalize text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
