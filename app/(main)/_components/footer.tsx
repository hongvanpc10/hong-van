import Link from 'next/link'
import { GitHub, Linkedin } from '~/components/icons'
import Logo from '~/components/logo'
import information from '~/fixtures/information.json'
import capitalize from '~/utils/capitalize'

export default function Footer() {
	return (
		<footer className='border-t border-gray-500'>
			<div className='container py-6'>
				<div className='flex justify-between'>
					<div>
						<div className='flex items-center'>
							
							<Logo />
							<p className='text-gray-400 ml-6'>
								@https://hong-van.vercel.app
							</p>
						</div>
						<h3 className='mt-4'>
							{capitalize(information.jobs.join(' and '))}
						</h3>
					</div>
					<div>
						<h2 className='text-lg font-normal'>Media</h2>
						<div className='flex items-center text-gray-400 space-x-3 mt-2'>
							<Link href={information.github} target='_blank'>
								<GitHub className='w-5' />
							</Link>
							<Link href={information.linkedin} target='_blank'>
								<Linkedin className='w-6' />
							</Link>
						</div>
					</div>
				</div>
				<p className='text-center mt-10 text-gray-400'>
					© Copyright {new Date().getFullYear()}. Made by{' '}
					{information.name}
				</p>
			</div>
		</footer>
	)
}
