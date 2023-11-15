import Image from '~/components/image'
import SectionHeader from '../../_components/section-header'
import images from '~/assets/images'
import SkillItem from '../../_components/skill-item'
import skills from '~/fixtures/skills.json'

const { languages, databases, other, frameworks, tools } = skills

export default function Skills() {
	return (
		<section>
			<SectionHeader title='skills' />
			<div className='flex space-x-16'>
				<div className='w-1/2 relative'>
					<Image
						alt='dots'
						src={images.dots}
						className='w-16 absolute top-8'
					/>
					<Image
						alt='dots'
						src={images.dots}
						className='w-12 absolute right-8 bottom-20'
					/>
					<Image
						alt='logo-outline'
						src={images.logoOutline}
						className='w-32 absolute left-4 bottom-0'
					/>
					<div className='w-20 h-20 border right-0 border-gray-400 absolute top-0' />
					<div className='w-12 h-12 border right-2 border-gray-400 absolute bottom-2' />
				</div>

				<div className='grid grid-cols-3 gap-5'>
					<SkillItem title='Languages' technologies={languages} />
					<div className='space-y-5'>
						<SkillItem title='Databases' technologies={databases} />
						<SkillItem title='Other' technologies={other} />
					</div>
					<div className='space-y-5'>
						<SkillItem
							title='Frameworks'
							technologies={frameworks}
						/>
						<SkillItem title='Tools' technologies={tools} />
					</div>
				</div>
			</div>
		</section>
	)
}
