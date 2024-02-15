
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import './App.css'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ContactMe from './components/ContactMe/ContactMe'
const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
          <Hero />
          <Skills/>
          <WorkExperience/>
          <ContactMe/>
      </div>
    </>
  )
}

export default App
