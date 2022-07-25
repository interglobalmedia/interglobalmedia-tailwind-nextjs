import Figure from './Figure'

const Unsplash = (unsplashProps) => {
	let props = {
		...unsplashProps,
		host: 'Unsplash',
		hostUrl: 'https://unsplash.com/license',
	}
	return <Figure {...props} />
}

export default Unsplash
