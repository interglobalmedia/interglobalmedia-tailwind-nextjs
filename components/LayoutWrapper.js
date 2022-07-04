import Footer from './Footer'
import Navigation from './Navigation'
import SectionContainer from './SectionContainer'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import '../styles/partials/LayoutWrapper.module.scss'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <Navigation />
      <motion.main
        key={router.pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className=""
      >
        <SectionContainer>
          <main className="mb-auto">{children}</main>
        </SectionContainer>
      </motion.main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
