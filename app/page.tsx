import Header from './components/Header'
import Hero from './components/Hero'
import MainBoxes from './components/MainBoxes'
import NewsAndProjects from './components/NewsAndProjects'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <MainBoxes />
      <NewsAndProjects />
    </div>
  )
}