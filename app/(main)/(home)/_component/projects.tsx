import routes from '~/configs/routes'
import SectionHeader from './section-header'
import projects from '~/fixtures/projects.json'
import Image from '~/components/image'
import Link from 'next/link'
import Button from '~/components/button'

export default function Projects() {
	return (
		<section>
			<SectionHeader title='projects' href={routes.works} />

			<div className='grid-cols-3 grid gap-6'>
				{projects.map(
					(
						{ description, image, name, technologies, url },
						index,
					) => (
						<div key={index} className='border border-gray-400'>
							<div className='aspect-w-16 aspect-h-10'>
								<Image
									alt={name}
									src={image}
									className='h-full'
								/>
							</div>
							<ul className='border-y border-gray-400 flex items-center space-x-2 p-2 text-gray-400'>
								{technologies.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
							<div className='p-3'>
								<h3 className='text-xl font-normal'>{name}</h3>
								<h4 className='text-gray-400 mt-3'>
									{description}
								</h4>
								<Link
									href={url}
									target='_blank'
									className='mt-3 inline-block'
								>
									<Button> Live {'<~>'}</Button>
								</Link>
							</div>
						</div>
					),
				)}
			</div>
		</section>
	)
}
