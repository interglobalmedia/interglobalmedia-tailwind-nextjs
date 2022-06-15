import Link from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

const Article = ({
  slug,
  title,
  date,
  summary,
  tags,
  images,
  isH2 = true,
  hasExtraLink = true,
}) => {
  let thumbnail = (
    <Link href={`/blog/${slug}`} title={title} className="w-full xl:w-auto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt={title} src={images} />
    </Link>
  )
  let headerLink = (
    <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
      {title}
    </Link>
  )

  let header = isH2 ? (
    <h2 className="text-2xl font-bold leading-8 tracking-tight">{headerLink}</h2>
  ) : (
    <h3 className="text-2xl font-bold leading-8 tracking-tight">{headerLink}</h3>
  )

  return (
    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <div className="grid gap-2 space-y-2 xl:grid-flow-col xl:grid-cols-4 xl:grid-rows-2 xl:gap-4 xl:space-y-0">
        <div className="xl:row-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {thumbnail}
        </div>
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <div className="space-y-3 xl:col-span-3">
          <div>
            <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <a>{title}</a>
              </h2>
            </Link>
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
          {hasExtraLink && (
            <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-blue-500 hover:text-blue-600 dark:text-orange-500 dark:hover:text-orange-400"
                aria-label={`Read "${title}"`}
              >
                <a>Learn more</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default Article
