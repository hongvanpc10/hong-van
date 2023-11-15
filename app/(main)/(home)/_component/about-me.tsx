import Image from '~/components/image'
import SectionHeader from '../../_components/section-header'
import images from '~/assets/images'
import Link from 'next/link'
import routes from '~/configs/routes'
import Button from '~/components/button'
import information from '~/fixtures/information.json'

export default function AboutMe() {
	return (
		<section>
			<SectionHeader title='about-me' />

			<div className='flex justify-between'>
				<div className='max-w-lg'>
					<div className='space-y-6 text-gray-400'>
						{information.aboutMe.map((content, index) => (
							<p key={index}>{content}</p>
						))}
					</div>

					<Link href={routes.aboutMe} className='inline-block mt-10'>
						<Button>Read more</Button>
					</Link>
				</div>
				<div className='max-w-xs w-full relative'>
					<Image
						alt='dots'
						src={images.dots}
						className='w-24 absolute -left-6'
					/>
					<Image
						alt='dots'
						src={images.dots}
						className='w-24 absolute right-4 bottom-1/4'
					/>
					<Image
						alt='about-me'
						src={information.images[1]}
						className='-mt-20'
					/>
					<div className='h-[1px] w-[80%] bg-primary-500 mx-auto mt-1' />
				</div>
			</div>
		</section>
	)
}
