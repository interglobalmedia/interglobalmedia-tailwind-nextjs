import Link from '@/components/Link'
import Image from 'next/image'
import '../styles/partials/IndexArticle.module.scss'

const IndexArticle = ({ slug, title, images, summary, isH2 = true }) => {
  let thumbnail = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {images.length > 0 && (
        <Image alt={title} src={images} width={1280} height={720} layout="intrinsic" />
      )}
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
    <h2>
      <span className="circle-sketch-highlight">Latest:</span>
    </h2>
  )

  return (
    <article className="blog-page-post-wrapper">
      <h2 className="index-article-latest-header">{latestHeader}</h2>
      <div className="grid gap-2 space-y-2 xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 xl:space-y-0">
        <div className="xl:row-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {thumbnail}
        </div>
        <div className="meta-wrapper">
          {header}
          {/* <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
          <div className="flex flex-wrap">
            {categories.map((category, index) => (
              <Category key={index} text={category} />
            ))}
          </div> */}
        </div>
        <div className="xl:col-span-2 xl:row-span-1">
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
          {/* {hasExtraLink && (
            <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-blue-500 hover:text-blue-600 dark:text-orange-500 dark:hover:text-orange-400"
                aria-label={`Read "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </article>
  )
}

export default IndexArticle
