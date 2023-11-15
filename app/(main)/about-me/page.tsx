import images from '~/assets/images'
import Image from '~/components/image'
import information from '~/fixtures/information.json'
import skills from '~/fixtures/skills.json'
import PageHeader from '../_components/page-header'
import SectionHeader from '../_components/section-header'
import SkillItem from '../_components/skill-item'

export default function AboutMe() {
	return (
		<main>
			<PageHeader title='about-me' subTitle='Who am i?' />

			<div className='space-y-20'>
				<section className='flex justify-between'>
					<div className='max-w-lg space-y-6 text-gray-400'>
						{information.aboutMe.map((content, index) => (
							<p key={index}>{content}</p>
						))}
					</div>
					<div className='max-w-xs w-full relative'>
						<Image
							alt='dots'
							src={images.dots}
							className='w-24 absolute -left-6'
						/>
						<Image
							alt='dots'
							src={images.dots}
							className='w-24 absolute right-4 bottom-1/4'
						/>
						<Image
							alt='about-me'
							src={information.images[1]}
							className='-mt-20'
						/>
						<div className='h-[1px] w-[80%] bg-primary-500 mx-auto mt-1' />
					</div>
				</section>

				<section>
					<SectionHeader title='skills' noLine />

					<div className='grid grid-cols-5 gap-5'>
						<SkillItem
							title='Languages'
							technologies={skills.languages}
						/>
						<SkillItem
							title='Frameworks'
							technologies={skills.frameworks}
						/>
						<SkillItem
							title='Databases'
							technologies={skills.databases}
						/>
						<SkillItem title='Tools' technologies={skills.tools} />
						<SkillItem title='Other' technologies={skills.other} />
					</div>
				</section>

				<section>
					<SectionHeader title='my-fun-facts' noLine />

					<div className='flex items-stretch'>
						<div className='flex w-[60%] flex-wrap'>
							{information.funFacts.map((content, index) => (
								<div
									key={index}
									className='px-2 py-1.5 border border-gray-400 mr-4 mb-5 text-gray-400'
								>
									{content}
								</div>
							))}
						</div>

						<div className='flex-1 relative'>
							<Image
								alt='dots'
								src={images.dots}
								className='w-16 absolute right-48 top-0'
							/>
						
							<Image
								alt='logo-outline'
								src={images.logoOutline}
								className='w-28 absolute top-16 right-16'
							/>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}
