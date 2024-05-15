import styles from './App.module.css'
import { Navigationbar } from './components/navigation_bar/Navigationbar'
import { Intro } from './components/intro/Intro'
import { About } from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'

function App() {

  return (
    <div className = {styles.App}>
      <Navigationbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
