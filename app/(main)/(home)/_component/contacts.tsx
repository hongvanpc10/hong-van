import SectionHeader from '../../_components/section-header'
import ContactsInfo from '../../contact-info'

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
					<ContactsInfo />
				</div>
			</div>
		</section>
	)
}
