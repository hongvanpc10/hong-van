import routes from '~/configs/routes'
import projects from '~/fixtures/projects.json'
import Project from '../../_components/project'
import SectionHeader from '../../_components/section-header'

export default function Projects() {
	return (
		<section>
			<SectionHeader title='projects' href={routes.works} />

			<div className='grid-cols-3 grid gap-6'>
				{projects.slice(0, 3).map((data, index) => (
					<Project key={index} {...data} />
				))}
			</div>
		</section>
	)
}
