import Link from '@/components/Link'
import Image from 'next/image'
import Tag from '@/components/Tag'
import Category from '@/components/Category'
import formatDate from '@/lib/utils/formatDate'
import '../styles/partials/Article.module.scss'

const Article = ({
  slug,
  title,
  date,
  summary,
  tags,
  categories,
  images,
  isH2 = true,
  hasExtraLink = true,
}) => {
  let thumbnail = (
    <Link href={`/blog/${slug}`} title={title} className="w-full xl:w-auto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {images.length > 0 && (
        <Image alt={title} src={images} width={1280} height={960} layout="intrinsic" />
      )}
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
    <article className="blog-page-post-wrapper">
      <div className="grid gap-2 space-y-2 xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 xl:space-y-0">
        <div className="xl:row-span-2">{thumbnail}</div>
        <div className="order-first space-y-0 xl:order-none xl:col-span-2 xl:space-y-0">
          <div>
            {header}
            <div className="flex flex-wrap">
              {categories.map((category) => (
                <Category key={category} text={category} />
              ))}
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-1">
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
          {hasExtraLink && (
            <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-blue-500 hover:text-blue-600 dark:text-orange-500 dark:hover:text-orange-400"
                aria-label={`Read "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default Article
