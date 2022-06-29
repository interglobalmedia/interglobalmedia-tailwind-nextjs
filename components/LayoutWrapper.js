import Link from './Link'
import Footer from './Footer'
import Navigation from './Navigation'
import SectionContainer from './SectionContainer'

import '../styles/partials/LayoutWrapper.module.scss'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navigation />
      <SectionContainer>
        <main className="mb-auto">{children}</main>
      </SectionContainer>
      <Footer />
    </>
  )
}

export default LayoutWrapper
