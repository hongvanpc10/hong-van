import Link from 'next/link'
import { GitHub, Linkedin } from '~/components/icons'
import information from '~/fixtures/information.json'

export default function Media() {
	return (
		<div className='flex flex-col items-center'>
			<div className='w-[1px] h-36 bg-gray-400 mb-2' />
			<div className='flex flex-col items-center space-y-3 text-gray-400'>
				<Link href={information.github} target='_blank'>
					<GitHub className='w-5' />
				</Link>
				<Link href={information.linkedin} target='_blank'>
					<Linkedin className='w-6' />
				</Link>
			</div>
		</div>
	)
}
