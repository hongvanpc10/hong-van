import Image from '~/components/image'
import SectionHeader from './section-header'
import images from '~/assets/images'
import Link from 'next/link'
import routes from '~/configs/routes'
import Button from '~/components/button'

export default function AboutMe() {
	return (
		<section>
			<SectionHeader title='about-me' />

			<div className='flex justify-between'>
				<div className='max-w-lg'>
					<div className='space-y-6 text-gray-400'>
						<p>{"Hello, i'm Van!"}</p>
						<p>
							{`I'm a self-taught front-end developer based in
							Vietnam. I can develop responsive websites from
							scratch and raise them into modern user-friendly web
							experiences.`}
						</p>
						<p>
							{`Transforming my creativity and knowledge into a
							websites has been my passion for over a year. I have
							been helping various clients to establish their
							presence online. I always strive to learn about the
							newest technologies and frameworks.`}
						</p>
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
						src={images.aboutMeSectionImage}
						className='-mt-20'
					/>
				</div>
			</div>
		</section>
	)
}
