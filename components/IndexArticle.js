import Link from '@/components/Link'
import Image from 'next/image'
import '../styles/partials/IndexArticle.module.scss'

const IndexArticle = ({ slug, title, images, summary, isH2 = true }) => {
  let thumbnail = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Link href={`/blog/${slug}`} title={title} className="w-full xl:w-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {images.length > 0 && (
          <Image alt={title} src={images} width={1280} height={960} layout="intrinsic" />
        )}
      </Link>
    </>
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

  let latestHeader = (
    <h2 className="index-article-latest-header pb-10 text-left text-6xl font-bold">
      <span className="top-heading circle-sketch-highlight text-gray-500 dark:text-gray-100">
        Latest
      </span>
    </h2>
  )

  return (
    <article className="blog-page-post-wrapper">
      {latestHeader}
      <div className="index-article-wrapper grid gap-2 xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 xl:space-y-0">
        <div className="xl:row-span-2">
          <span className="top-heading">{header}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {thumbnail}
        </div>
        <div className="meta-wrapper">
          <span className="bottom-heading">{header}</span>
        </div>
        <div className="xl:col-span-2 xl:row-span-1">
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
        </div>
      </div>
    </article>
  )
}

export default IndexArticle
