import Footer from '../site-partials/Footer'
import Navigation from '../site-partials/Navigation'
import SectionContainer from './SectionContainer'

import '../../styles/partials/LayoutWrapper.module.scss'

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
