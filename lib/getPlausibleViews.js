const fetcher = (input, init) =>
	fetch(input, init).then((res) => {
		res.json()
	})

async function getPlausibleViews(slug) {
	const dateNow = Date.now.toUTCString()
	const url = `https://stats.plausible.io/api/v1/stats/aggregate?site_id=interglobalmedianetwork.com&period=custom&date=2022-07-08,${dateNow}&filters=event:page==/blog/${slug}`

	return fetcher(url, {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_PLAUSIBLE_API_KEY}`,
			Accept: 'application/json',
		},
	})
}
