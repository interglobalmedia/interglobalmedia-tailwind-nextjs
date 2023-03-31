import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'
// import '../styles/partials/Tag.module.scss'

const Tag = ({ text }) => {
	return (
		<Link
			className="tag mr-3 text-sm font-medium capitalize text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
			href={`/tags/${kebabCase(text)}`}
		>
			{text.split(' ').join('-')}
		</Link>
	)
}

export default Tag
