import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import ScrollTop from '@/components/ScrollTop'
import '../styles/partials/Projects.module.scss'

export default function Projects({ initialDisplayPosts = [] }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredProjectPosts = projectsData.filter((project) => {
    const searchContent = project.title + project.summary + project.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayProjectPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredProjectPosts
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ScrollTop />
      <main className="divide-y divide-gray-200 dark:divide-gray-900">
        <section className="projects-page-title-wrapper space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Search All Projects
          </h1>
          <section className="relative max-w-lg">
            <input
              aria-label="Search projects"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search projects"
              className="search block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </section>
        </section>
        <section className="container py-12">
          <article className="grid gap-4 xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 xl:space-y-0">
            {!filteredProjectPosts.length && 'No projects found.'}
            {displayProjectPosts
              .map((d) => (
                <Card
                  key={d.id}
                  title={d.title}
                  summary={d.summary}
                  imgSrc={d.imgSrc}
                  href={d.href}
                  tags={d.tags}
                />
              ))
              .sort()
              .reverse()}
          </article>
        </section>
      </main>
    </>
  )
}
