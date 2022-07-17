import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Category from '@/components/Category'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import '../styles/partials/PostLayout.module.scss'
import ShareTweet from '@/components/social-share/ShareTweet'
import ShareHN from '@/components/social-share/ShareHN'
import ShareReddit from '@/components/social-share/ShareReddit'
import ShareFB from '@/components/social-share/ShareFB'

const editUrl = (fileName) =>
	`${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
	`https://mobile.twitter.com/search?q=${encodeURIComponent(
		`${siteMetadata.siteUrl}/blog/${slug}`,
	)}`

const postDateTemplate = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
}

export default function PostLayout({
	frontMatter,
	authorDetails,
	next,
	prev,
	children,
}) {
	const { slug, fileName, date, lastmod, title, categories, tags, images } =
		frontMatter

	return (
		<SectionContainer>
			<BlogSEO
				url={`${siteMetadata.siteUrl}/blog/${slug}`}
				authorDetails={authorDetails}
				{...frontMatter}
				twImage={images.url}
			/>
			<ScrollTopAndComment />
			<article>
				<div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
					<header className="pt-6 xl:pb-6">
						<div className="space-y-1 text-center">
							<dl className="space-y-10">
								<div className="post-heading-wrapper">
									<dt className="sr-only">Published on</dt>
									<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
										<time dateTime={date}>
											{new Date(date).toLocaleDateString(
												siteMetadata.locale,
												postDateTemplate,
											)}{' '}
											| {frontMatter.readingTime.text}
										</time>
									</dd>
								</div>
							</dl>
							<div>
								<PageTitle>{title}</PageTitle>
							</div>
							<div className="post-heading-wrapper">
								<dt className="sr-only">Last Modified on</dt>
								<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
									<strong>Last modified</strong> on{' '}
									<time dateTime={lastmod}>
										{new Date(lastmod).toLocaleDateString(
											siteMetadata.locale,
											postDateTemplate,
										)}
									</time>
								</dd>
							</div>
						</div>
					</header>
					<div
						className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
						style={{ gridTemplateRows: 'auto 1fr' }}
					>
						<dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
							<dt className="sr-only">Authors</dt>
							<dd>
								<ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
									{authorDetails.map((author) => (
										<li
											className="flex items-center space-x-2"
											key={author.name}
										>
											{author.avatar && (
												<Image
													src={author.avatar}
													width="120px"
													height="120px"
													alt="avatar"
													className="h-10 w-10 rounded-full"
												/>
											)}
											<dl className="whitespace-nowrap text-sm font-medium leading-5">
												<dt className="sr-only">
													Name
												</dt>
												<dd className="text-gray-900 dark:text-gray-100">
													{author.name}
												</dd>
												<dt className="sr-only">
													Twitter
												</dt>
												<dd>
													{author.twitter && (
														<Link
															href={
																author.twitter
															}
															className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
														>
															{author.twitter.replace(
																'https://twitter.com/letsbsocial1',
																'@letsbsocial1',
															)}
														</Link>
													)}
												</dd>
											</dl>
										</li>
									))}
								</ul>
							</dd>
						</dl>
						<div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
							<div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
								{children}
							</div>
							<div className="share-icons-wrapper">
								<h1 className="social-share-heading">
									Social Share:
								</h1>
								<div className="social-share-links">
									<ShareFB
										className="mt-12"
										url={`https://www.interglobalmedianetwork.com/blog/${frontMatter.slug}`}
										title={frontMatter.title}
									/>
									<ShareTweet
										className="mt-12"
										url={`https://www.interglobalmedianetwork.com/blog/${frontMatter.slug}`}
										title={frontMatter.title}
									/>
									<ShareHN
										className="mt-12"
										url={`https://www.interglobalmedianetwork.com/blog/${frontMatter.slug}`}
										title={frontMatter.title}
									/>
									<ShareReddit
										className="mt-12"
										url={`https://www.interglobalmedianetwork.com/blog/${frontMatter.slug}`}
										title={frontMatter.title}
									/>
								</div>
							</div>
							<div className="pt-6 pb-6 text-base text-gray-700 dark:text-gray-300">
								<Link href={discussUrl(slug)} rel="nofollow">
									{'Discuss on Twitter'}
								</Link>
								{` • `}
								<Link href={editUrl(fileName)}>
									{'View on GitHub'}
								</Link>
							</div>
							<Comments frontMatter={frontMatter} />
						</div>
						<footer className="post-layout-footer">
							<div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
								{tags && (
									<div className="post-tags-wrapper py-4 xl:py-8">
										<h2 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
											Tags
										</h2>
										<div className="flex flex-wrap">
											{tags.map((tag, index) => (
												<Tag key={index} text={tag} />
											))}
										</div>
									</div>
								)}
								{categories && (
									<div className="post-cats-wrapper py-4 xl:py-8">
										<h2 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
											Categories
										</h2>
										<div className="flex flex-wrap">
											{categories.map(
												(category, index) => (
													<Category
														key={index}
														text={category}
													/>
												),
											)}
										</div>
									</div>
								)}
								{(next || prev) && (
									<div className="prev-article-link flex justify-between py-4 text-sm xl:block xl:space-y-8 xl:py-8">
										{prev && (
											<div>
												<h2 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
													Previous Article
												</h2>
												<div className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
													<Link
														href={`/blog/${prev.slug}`}
													>
														{prev.title}
													</Link>
												</div>
											</div>
										)}
										{next && (
											<div>
												<h2 className="next-article-link text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
													Next Article
												</h2>
												<div className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
													<Link
														href={`/blog/${next.slug}`}
													>
														{next.title}
													</Link>
												</div>
											</div>
										)}
									</div>
								)}
							</div>
							<div className="pt-4 xl:pt-8">
								<Link
									href="/blog"
									className="back-to-blog-link text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
								>
									&larr; Back to blog
								</Link>
							</div>
						</footer>
					</div>
				</div>
			</article>
		</SectionContainer>
	)
}
