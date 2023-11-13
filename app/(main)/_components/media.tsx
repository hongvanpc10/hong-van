import { GitHub } from '~/components/icons'

export default function Media() {
	return (
		<div className='flex flex-col items-center'>
			<div className='w-[1px] h-36 bg-gray-400 mb-2' />
			<div className='flex flex-col items-center text-gray-400'>
				<GitHub className='w-5' />
			</div>
		</div>
	)
}
