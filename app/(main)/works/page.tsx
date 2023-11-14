import { Metadata } from 'next'
import PageHeader from '../_components/page-header'
import SectionHeader from '../_components/section-header'
import projects from '~/fixtures/projects.json'
import smallProjects from '~/fixtures/small-projects.json'
import Project from '../_components/project'

export const metadata: Metadata = {
	title: 'Projects',
}

export default function Works() {
	return (
		<main>
			<PageHeader title='projects' subTitle='List of my projects' />

			<div className='space-y-20'>
				<section>
					<SectionHeader noLine title='complete-apps' />

					<div className='grid-cols-3 grid gap-6'>
						{projects.map((data, index) => (
							<Project key={index} {...data} />
						))}
					</div>
				</section>

				<section>
					<SectionHeader noLine title='small-projects' />

					<div className='grid-cols-3 grid gap-6'>
						{smallProjects.map((data, index) => (
							<Project key={index} {...data} />
						))}
					</div>
				</section>
			</div>
		</main>
	)
}
