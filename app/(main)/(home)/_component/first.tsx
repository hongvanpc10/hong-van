import Link from 'next/link'
import images from '~/assets/images'
import Button from '~/components/button'
import Image from '~/components/image'
import routes from '~/configs/routes'
import information from '~/fixtures/information.json'

export default function First() {
	return (
		<section className='flex items-center'>
			<div className='flex-1 pr-24'>
				<h2 className='text-3xl font-medium'>
					{information.name} is a{' '}
					{information.jobs.map((job, index) => (
						<span key={index}>
							{index > 0 && ' and '}
							<span className='text-primary-500'>{job}</span>
						</span>
					))}
				</h2>
				<h3 className='mt-8 text-gray-400'>
					{information.jobsDescriptions}
				</h3>
				<Link href={routes.contacts} className='mt-10 inline-block'>
					<Button>Contact me !!</Button>
				</Link>
			</div>
			<div className='w-[40%] relative'>
				<Image
					alt='logo-outline'
					src={images.logoOutline}
					className='w-44 absolute -z-10 -left-4 top-16'
				/>
				<Image
					alt='profile-picture'
					src={information.images[0]}
					className=''
				/>
				<div className='py-1.5 px-2 mx-auto w-[85%] mt-1 border border-gray-400 flex items-center'>
					<div className='w-4 h-4 bg-primary-500 mr-3'></div>
					<h3 className='text-gray-400 font-normal'>
						Currently study at{' '}
						<span className='text-white'>UIT</span>
					</h3>
				</div>
			</div>
		</section>
	)
}
