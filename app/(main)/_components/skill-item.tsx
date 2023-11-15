interface SkillItemProps {
	title: string
	technologies: string[]
}

export default function SkillItem({ technologies, title }: SkillItemProps) {
	return (
		<div className='border border-gray-400 h-fit'>
			<h3 className='p-1.5 font-medium'>{title}</h3>
			<ul className='border-t border-gray-400 p-2 flex items-center flex-wrap'>
				{technologies.map((item, index) => (
					<li key={index} className='text-gray-400 mr-2 mb-1.5'>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}
