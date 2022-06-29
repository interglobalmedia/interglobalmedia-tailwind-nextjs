import Link from './Link'
import Footer from './Footer'
import Navigation from './Navigation'

import '../styles/partials/LayoutWrapper.module.scss'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="mb-auto">{children}</main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
