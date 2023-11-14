interface PageHeaderProps {
	title: string
	subTitle: string
}

export default function PageHeader({ subTitle, title }: PageHeaderProps) {
	return (
		<div className='mb-16'>
			<h1 className='text-2xl font-medium'>
				<span className='text-primary-500'>/</span>
				{title}
			</h1>
			<h3 className='mt-3 text-gray-200'>{subTitle}</h3>
		</div>
	)
}
