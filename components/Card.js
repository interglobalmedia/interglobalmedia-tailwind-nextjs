import Image from './Image'
import Link from './Link'
import '../styles/partials/Card.module.scss'

const Card = ({ title, summary, imgSrc, href, tags }) => (
  <div className="md p-4 style={{ maxWidth: '768px' }}">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={768}
              height={432}
              layout="responsive"
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={768}
            height={432}
            layout="responsive"
          />
        ))}
      <div className="p-6">
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{summary}</p>
        <div className="flex flex-wrap">{tags}</div>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
