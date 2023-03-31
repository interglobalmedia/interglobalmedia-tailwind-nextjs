import { useEffect, useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { document } from 'browser-monads'
import Link from 'next/link'
import useIsMounted from '../../hooks/useIsMounted'
import headerNavLinks from '@/data/headerNavLinks'
import { isActiveLink } from '@/lib/utils/activeLink'
import siteMetadata from '@/data/siteMetadata'
import '../../styles/partials/Navigation.module.scss'

const Navigation = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false)
	const isMounted = useIsMounted()
	const router = useRouter()
	const { theme, setTheme, resolvedTheme } = useTheme()

	const toggleMobileNav = () => {
		setMobileNavOpen(!mobileNavOpen)
		const navbar = document.querySelector('.main-nav')
		const ham = document.querySelector('.hamburger')
		if (mobileNavOpen) {
			navbar.classList.add('show-nav')
			ham.classList.add('show-close')
		} else {
			navbar.classList.remove('show-nav')
			ham.classList.remove('show-close')
		}
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	function navHighlight() {
		const links = document.querySelectorAll('.menu-link')
		for (let i = 0; i < links.length; i++) {
			if (links[i].href === document.URL) {
				links[i].classList.add('active')
			}
		}
	}

	useEffect(() => {
		navHighlight()
	}, [navHighlight])

	return (
		<header className="header">
			<nav className="navbar">
				<div className="brand-wrapper">
					{/* eslint-disable-next-line @next/next/link-passhref */}
					<Link
						href="/"
						className="brand"
						aria-label={siteMetadata.headerTitle}
					>
						<svg
							className="brand-svg"
							width="48px"
							height="48px"
							viewBox="0 0 1024 1024"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="#333"
								d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
							/>
							<path
								fill="#E6E6E6"
								d="M184 840h656V184H184v656zm339.5-223h185c4.1 0 7.5 3.6 7.5 8v48c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8zM308 610.3c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7z"
							/>
							<path
								fill="#333"
								d="M321.1 679.1l192-161c3.9-3.2 3.9-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48z"
							/>
						</svg>
					</Link>
				</div>
				<ul className="main-nav flex flex-wrap">
					{headerNavLinks.map((link, index) => {
						return (
							<li key={index} className="menu-link-li">
								<Link
									key={link.title}
									href={link.href}
									className={`${router.pathname} ===
                    ${link.href} ? 'active' : ''} menu-link relative mr-6 flex flex-col font-medium text-gray-900 dark:text-gray-100 sm:mr-8 sm:p-4`}
									onClick={toggleMobileNav}
								>
									{link.title}
									{isActiveLink(
										link.href,
										router.pathname,
									) && (
										<motion.div
											layoutId="navigation-underline"
											className="navigation-underline active"
											transition={{
												duration: 0.5,
												type: 'tween',
											}}
											animate
										></motion.div>
									)}
								</Link>
							</li>
						)
					})}
				</ul>
				<div className="svg-wrapper">
					<button
						aria-label="Toggle Dark Mode"
						type="button"
						className="moon-sun ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
						onClick={() =>
							setTheme(
								theme === 'dark' || resolvedTheme === 'dark'
									? 'light'
									: 'dark',
							)
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="text-gray-900 dark:text-gray-100"
						>
							{isMounted &&
							(theme === 'dark' || resolvedTheme === 'dark') ? (
								<path
									fillRule="evenodd"
									d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
									clipRule="evenodd"
								/>
							) : (
								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
							)}
						</svg>
					</button>

					<button className="hamburger" aria-label="Right Align">
						<svg
							width="100"
							height="100"
							viewBox="0 0 100 100"
							onClick={toggleMobileNav}
						>
							<path
								className="line top"
								d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
							/>
							<path className="line middle" d="M 20,50 H 80" />
							<path
								className="line bottom"
								d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
							/>
						</svg>
					</button>
				</div>
			</nav>
		</header>
	)
}

export default Navigation
