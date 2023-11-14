import Link from 'next/link'
import Button from '~/components/button'
import Image from '~/components/image'

interface ProjectProps {
	name: string
	image?: string
	technologies: string[]
	description: string
	url: string
}

export default function Project({
	description,
	image,
	name,
	technologies,
	url,
}: ProjectProps) {
	return (
		<div className='border border-gray-400'>
			{image && (
				<div className='aspect-w-16 aspect-h-10 border-b border-gray-400'>
					<Image alt={name} src={image} className='h-full' />
				</div>
			)}
			<ul className='border-b border-gray-400 flex items-center space-x-2 p-2 text-gray-400'>
				{technologies.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<div className='p-3'>
				<h3 className='text-xl font-normal'>{name}</h3>
				<h4 className='text-gray-400 mt-3'>{description}</h4>
				<Link href={url} target='_blank' className='mt-3 inline-block'>
					<Button> Live {'<~>'}</Button>
				</Link>
			</div>
		</div>
	)
}
