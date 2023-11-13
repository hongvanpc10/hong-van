import Footer from './_components/footer'
import Header from './_components/header'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<Header />
			<div className='container mt-20 mb-36'>{children}</div>
			<Footer />
		</div>
	)
}
