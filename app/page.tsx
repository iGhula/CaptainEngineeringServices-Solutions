import Header from './components/Header'
import Hero from './components/Hero'
import MainBoxes from './components/MainBoxes'
import NewsAndProjects from './components/NewsAndProjects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MainBoxes />
      <NewsAndProjects />
      <Footer />
    </div>
  )
}
