import styles from './App.module.css'
import { Navigationbar } from './components/navigation_bar/Navigationbar'
import { Intro } from './components/intro/Intro'
import { About } from './components/about/About'
import { Experience } from './components/experience/Experience'

function App() {

  return (
    <div className = {styles.App}>
      <Navigationbar />
      <Intro />
      <About />
      <Experience />
    </div>
  )
}

export default App;
