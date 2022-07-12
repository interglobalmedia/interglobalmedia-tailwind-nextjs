const now = new Date()
const [nowDate] = now.toISOString().split('T')
// nowDate now yields a YYYY-MM-DD format of the current date
const fetcher = (input, init) => fetch(input, init).then((res) => res.json())

async function getPlausibleViews({ slug }) {
	const url = `https://stats.jinterglobalmedianetwork.com/api/v1/stats/aggregate?site_id=interglobalmedianetwork.com&period=custom&date=2022-07-08,${nowDate}&filters=event:page==/blog/${slug}`
	return fetcher(url, {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_PLAUSIBLE_API_KEY}`,
			Accept: 'application/json',
		},
	})
}
