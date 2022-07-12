import { getPlausibleViews } from '@/lib/getPlausibleViews'
const viewsHandler = async (req, res) => {
	const dateNow = Date.now.toUTCString()
	const { slug } = req.query
	if (!slug) {
		return res.status(400).send('Bad request')
	}
	try {
		const data = await getPlausibleViews(slug)
		return res.status(200).json({
			requestedSlug: slug,
			// eslint-disable-next-line no-undef
			date: dateNow,
			views: data?.results?.visitors?.value,
		})
	} catch (err) {
		console.error(err)
		return res.status(500).json({ err })
	}
}

export default viewsHandler
