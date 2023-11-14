import images from '~/assets/images'
import Image from '~/components/image'
import information from '~/fixtures/information.json'

export default function Quote() {
	return (
		<section className='flex justify-center'>
			<div className='flex flex-col items-end'>
				<div className='text-xl relative font-normal border border-gray-400 p-7'>
					{information.quote.content}
					<div className='inline-block absolute left-3 top-0 -translate-y-1/2 p-2 rounded-full bg-gray-800'>
						<Image alt='quote' src={images.quote} className='w-5' />
					</div>
					<div className='inline-block absolute right-3 bottom-0 translate-y-1/2 p-2 rounded-full bg-gray-800'>
						<Image alt='quote' src={images.quote} className='w-5' />
					</div>
				</div>
				<div className='p-3 text-xl border border-t-0 border-gray-400'>
					- {information.quote.author}
				</div>
			</div>
		</section>
	)
}
