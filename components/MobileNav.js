import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from './Link'
import ThemeSwitch from './ThemeSwitch'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const router = useRouter()

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'hidden'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'auto'
      }
      return !status
    })
  }
  ;<header className="header">
    <div className="flex items-center justify-between">
      <div className="h-6 text-2xl font-semibold sm:block">
        <Link href="/" className="brand menu-link" aria-label={siteMetadata.headerTitle}>
          <span className="globe sketch-highlight h-6 text-2xl font-semibold sm:block">
            Inter 🌐 Media
          </span>
        </Link>
      </div>
    </div>

    <div className="flex items-center text-base leading-5">
      <div className="hidden sm:block">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="font-medium text-gray-900 first-letter:p-1 dark:text-gray-100 sm:p-4"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <ThemeSwitch />
      <MobileNav />
    </div>
  </header>

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-5 mt-11 h-8 w-8 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className={`${
                  router.pathname === link.href ? 'active' : ''
                } menu-link font-bold tracking-widest text-gray-900 marker:text-2xl dark:text-gray-100`}
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
