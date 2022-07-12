import { fetcher } from '@/lib/fetcher'

export default async function getPlausibleViews(slug) {
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
