import Link from 'next/link'
import cn from '~/utils/cn'

interface SectionHeaderProps {
	title: string
	href?: string
	noLine?: boolean
}

export default function SectionHeader({
	href,
	title,
	noLine,
}: SectionHeaderProps) {
	return (
		<div className='flex items-center mb-10'>
			<h2 className='text-2xl font-normal'>
				<span className='text-primary-500'>#</span>
				<span>{title}</span>
			</h2>
			{!noLine && (
				<div
					className={cn(
						'h-[1px] rounded-full bg-primary-500 ml-6',
						href ? 'w-1/3' : 'w-1/4',
					)}
				></div>
			)}
			{href && (
				<Link href={href} className='ml-auto text-sm'>
					View all {'~~>'}
				</Link>
			)}
		</div>
	)
}
