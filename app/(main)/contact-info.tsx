import { Email } from '~/components/icons'
import information from '~/fixtures/information.json'

export default function ContactsInfo() {
	return (
		<div className='border border-gray-400 p-4'>
			<h3 className='font-medium mb-4'>Message me here</h3>
			<ul className='text-gray-400 space-y-4'>
				<li className='flex items-center'>
					<Email className='h-4 mr-3' />
					<h4>{information.email}</h4>
				</li>
			</ul>
		</div>
	)
}
