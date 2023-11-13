import { Email } from '~/components/icons'
import SectionHeader from './section-header'

export default function Contacts() {
	return (
		<section>
			<SectionHeader title='contacts' />

			<div className='flex justify-between'>
				<div className='space-y-6 w-1/2 max-w-lg text-gray-400'>
					{`I'm interested in freelance opportunities. However, if you
					have other request or question, don't hesitate to contact me`}
				</div>

				<div className='w-full max-w-xs'>
					<div className='border border-gray-400 p-4'>
						<h3 className='font-medium mb-4'>Message me here</h3>
						<ul className='text-gray-400 space-y-4'>
							<li className='flex items-center'>
								<Email className='h-4 mr-3' />
								<h4>hongvanpc10@gmail.com</h4>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
