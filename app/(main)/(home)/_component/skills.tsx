import Image from '~/components/image'
import SectionHeader from './section-header'
import images from '~/assets/images'
import SkillItem from './skill-item'
import skills from '~/fixtures/skills.json'

const { languages, databases, other, frameworks, tools } = skills

export default function Skills() {
	return (
		<section>
			<SectionHeader title='skills' />
			<div className='flex space-x-16'>
				<div className='w-1/2'>
					<Image alt='skills' src={images.skillsSectionImage} />
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
