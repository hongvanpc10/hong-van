import ActiveLink from '~/components/active-link'
import Logo from '~/components/logo'
import routes from '~/configs/routes'
import Media from './media'

export default function Header() {
	return (
		<header className='relative'>
			<div className='absolute top-0 left-10'>
				<Media />
			</div>
			<div className='container h-20 flex items-center justify-between'>
				<Logo />
				<nav className='flex items-center space-x-10'>
					{[
						{ title: 'home', href: routes.home },
						{ title: 'works', href: routes.works },
						{ title: 'about-me', href: routes.aboutMe },
						{ title: 'contacts', href: routes.contacts },
					].map((item, index) => (
						<ActiveLink
							key={index}
							href={item.href}
							className='flex items-center group/nav-item'
							activeClassName='[&>h3]:text-white font-normal'
						>
							<span className='text-primary-500 text-lg'>#</span>
							<h3 className='text-gray-400 transition group-hover/nav-item:text-white'>
								{item.title}
							</h3>
						</ActiveLink>
					))}
				</nav>
			</div>
		</header>
	)
}
