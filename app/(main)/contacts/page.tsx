import Link from 'next/link'
import PageHeader from '../_components/page-header'
import SectionHeader from '../_components/section-header'
import ContactsInfo from '../contact-info'
import { GitHub, Linkedin } from '~/components/icons'
import information from '~/fixtures/information.json'

export default function Contacts() {
	return (
		<main>
			<PageHeader title='contacts' subTitle='Who am i?' />

			<div className='space-y-20'>
				<section className='flex justify-between'>
					<div className='space-y-6 w-[40%] max-w-lg text-gray-400'>
						{`I'm interested in freelance opportunities. However, if you
						have other request or question, don't hesitate to contact me`}
					</div>

					<div className='w-full max-w-lg flex space-x-4'>
						<div className='border border-gray-400 p-4'>
							<h3 className='font-medium mb-4'>
								Support me here
							</h3>
							<h4 className='text-gray-400'>
								MB Bank: 0382718305
							</h4>
						</div>

						<ContactsInfo />
					</div>
				</section>

				<section>
					<SectionHeader title='all-medias' noLine />

					<div className='flex items-center text-gray-400 space-x-5'>
						<Link href={information.github} target='_blank'>
							<GitHub className='w-5' />
						</Link>
						<Link href={information.linkedin} target='_blank'>
							<Linkedin className='w-6' />
						</Link>
					</div>
				</section>
			</div>
		</main>
	)
}
