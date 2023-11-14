import type { Metadata } from 'next'
import cn from '~/utils/cn'
import './globals.css'
import fonts from '~/configs/fonts'
import information from '~/fixtures/information.json'

export const metadata: Metadata = {
	title: information.name,
	icons: {
		icon: '/logo.svg',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={cn(
					fonts.sans.className,
					'min-h-screen bg-gray-800 text-white font-light',
				)}
			>
				{children}
			</body>
		</html>
	)
}
