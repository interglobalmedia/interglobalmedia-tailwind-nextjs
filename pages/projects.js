import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Tag from '@/components/Tag'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Pagination from '@/components/Pagination'

export default function Projects({ posts, title, initialDisplayPosts = [], pagination }) {
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
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p>
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {!filteredProjectPosts.length && 'No projects found.'}
            {displayProjectPosts.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
