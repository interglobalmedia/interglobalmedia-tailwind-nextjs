import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'
import '../../styles/partials/Category.module.scss'

const Category = ({ text }) => {
	return (
		<Link
			className="category mr-3 text-sm font-medium capitalize text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
			href={`/categories/${kebabCase(text)}`}
		>
			{text.split(' ').join('-')}
		</Link>
	)
}

export default Category
