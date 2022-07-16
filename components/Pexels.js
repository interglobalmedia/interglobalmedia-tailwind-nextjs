import Figure from './Figure'

const Pexels = (pexelsProps) => {
	let props = {
		...pexelsProps,
		host: 'Pexels',
		hostUrl: 'https://www.pexels.com/license/',
	}
	return <Figure {...props} />
}

export default Pexels
