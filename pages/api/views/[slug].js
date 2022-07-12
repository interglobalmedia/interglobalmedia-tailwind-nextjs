import { fetcher } from '@/lib/fetcher'
async function getPlausibleViews(slug) {
	const now = new Date()
	const nowDate = now.toISOString().split('T')
	const url = `https://stats.interglobalmedianetwork.com/api/v1/stats/aggregate?site_id=jinterglobalmedianetwork.com&period=custom&date=2022-07-08,${nowDate}&filters=event:page==/${slug}`
	return fetcher(url, {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_PLAUSIBLE_API_KEY}`,
			Accept: 'application/json',
		},
	})
}

const viewsHandler = async (req, res) => {
	const { slug } = req.query
	if (!slug) {
		return res.status(400).send('Bad request')
	}
	try {
		const data = await getPlausibleViews(slug)
		if (data.error) {
			console.error(data.error)
			return res
				.status(500)
				.json({ message: data.error, type: 'api-error' })
		}
		return res.status(200).json({
			requestedSlug: slug,
			views: data.results.visitors.value,
		})
	} catch (error) {
		console.error(error)
		return res.status(500).json(error)
	}
}

export default viewsHandler
