import Figure from './Figure'

const Interglobalmedia = (interglobalmediaProps) => {
	const props = {
		...interglobalmediaProps,
		host: 'Interglobalmedia',
		hostUrl: '/',
	}
	return <Figure {...props} />
}

export default Interglobalmedia
