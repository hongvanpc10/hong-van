import AboutMe from './_component/about-me'
import Contacts from './_component/contacts'
import First from './_component/first'
import Projects from './_component/projects'
import Quote from './_component/quote'
import Skills from './_component/skills'

export default function Home() {
	return (
		<main className='space-y-20'>
			<First />
			<Quote />
			<Projects />
			<Skills />
			<AboutMe />
			<Contacts />
		</main>
	)
}
