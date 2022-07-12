const now = new Date()
const nowDate = now.toISOString().split('T')

const fetcher = (input, init) => fetch(input, init).then((res) => res.json())

export default async function getPlausibleViews(frontMatter) {
	const { slug } = frontMatter
	const url = `https://stats.interglobalmedianetwork.com/api/v1/stats/aggregate?site_id=jinterglobalmedianetwork.com&period=custom&date=2020-12-29,${nowDate}&filters=event:page===/blog/${slug}`
	return fetcher(url, {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_PLAUSIBLE_API_KEY}`,
			Accept: 'application/json',
		},
	})
}
