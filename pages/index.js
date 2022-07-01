import Image from 'next/image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import IndexArticle from '@/components/IndexArticle'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import NewsletterForm from '@/components/NewsletterForm'
import ServicesSlider from '@/components/ServicesSlider'
import DevTips from '@/components/DevTips'
import ScrollTop from '@/components/ScrollTop'
import '../styles/partials/Index.module.scss'

const MAX_DISPLAY = 1

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts, hasExtraLink = true }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ScrollTop />
      <div className="home-page-wrapper divide-y divide-gray-200 dark:divide-gray-700">
        <div className="home-page-title-wrapper space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="home-page-title text-4xl font-extrabold leading-9 tracking-tight text-gray-500 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi there!
          </h1>
          <p className="home-page-description text-lg leading-7 text-gray-500 dark:text-gray-400">
            <span className="realistic-marker-highlight">
              And <b className="intro-highlight">welcome</b> to{' '}
              <b className="intro-highlight">Inter-Global Media Network.</b> I'm{' '}
              <b className="intro-highlight">Maria,</b> and I{' '}
              <b className="intro-highlight">design,</b> <b className="intro-highlight">develop,</b>{' '}
              and <b className="intro-highlight">teach experiences</b>
              that <b className="intro-highlight">make</b> people's lives{' '}
              <b className="intro-highlight">simpler.</b>
            </span>
          </p>
          <svg
            xmlns="//www.w3.org/2000/svg"
            version="1.1"
            className="svg-filters"
            style={{ display: 'none' }}
          >
            <defs>
              <filter id="marker-shape">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0 0.15"
                  numOctaves="1"
                  result="warp"
                />
                <feDisplacementMap
                  xChannelSelector="R"
                  yChannelSelector="G"
                  scale="30"
                  in="SourceGraphic"
                  in2="warp"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <article className="blog-page-post-wrapper">
          <h2 className="index-article-latest-header pb-10 text-left text-6xl font-bold">
            <span className="circle-sketch-highlight text-gray-500 dark:text-gray-100">
              Podcast
            </span>
          </h2>
          <h3 className="latest-podcast-episode">
            <a href="https://anchor.fm/maria-campbell/episodes/Migrating-from-Gatsby-v2-to-v3-eukj32">
              <span className=" realistic-marker-highlight">Listen to the latest episode</span>
            </a>
          </h3>
        </article>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, title, summary } = frontMatter
            return (
              <li key={slug} className="py-12">
                <IndexArticle
                  slug={slug}
                  title={title}
                  summary={summary}
                  images={frontMatter.images[0]}
                  isH2={true}
                />
              </li>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
        <ServicesSlider />
        <DevTips />
        {siteMetadata.newsletter.provider !== '' && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}
      </div>
    </>
  )
}
