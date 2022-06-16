import Link from 'next/link'
import catKebabCase from '@/lib/utils/catKebabCase'
import '../styles/partials/Category.module.scss'

const Category = ({ text }) => {
  return (
    <Link href={`/categories/${catKebabCase(text)}`}>
      <a className="category mr-3 text-sm font-medium capitalize text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Category
