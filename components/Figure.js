import Image from 'next/image'
import '../styles/partials/Figure.module.scss'

const Figure = ({ alt, src, srcUrl, author, authorUrl, host, hostUrl }) => {
	if (!alt || !src || !author || !authorUrl || !host || !hostUrl) {
		return null
	}
	// eslint-disable-next-line @next/next/no-img-element
	let image = (
		<Image
			src={src}
			className="figure-image"
			alt={alt}
			width={1280}
			height={853}
			layout="intrinsic"
		/>
	)
	let caption = (
		<figcaption className="figcaption">
			Photo by{' '}
			<a href={authorUrl} title={`See the profile of ${author}`}>
				{author}
			</a>{' '}
			on{' '}
			<a href={hostUrl} title={`Open ${host}`}>
				{host}
			</a>
		</figcaption>
	)
	return (
		<figure className="figure relative flex flex-col items-center">
			{srcUrl ? (
				<a className="w-full" href={srcUrl} title="See image">
					{image}
				</a>
			) : (
				{ image }
			)}
			{caption}
		</figure>
	)
}

export default Figure
