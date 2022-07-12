import { fetcher } from '@/lib/getPlausibleViews'
import useSWR from 'swr'
import '../styles/partials/Views.module.scss'

const DisplayViews = ({ slug }) => {
	// Fetch the data with the useSWR hook
	const { data, error } = useSWR(`/api/views/${slug}`, fetcher)
	// If there's no data and no error, display a loading state
	if (!data && !error) {
		return (
			<div className="inline-block animate-pulse rounded bg-zinc-100 text-transparent dark:bg-zinc-800">
				Loading views
			</div>
		)
	}
	// If there's data, display the data
	return (
		<div className="flex items-center">
			<span className="tabular-nums">{data?.views} views</span>
		</div>
	)
}

export default DisplayViews
