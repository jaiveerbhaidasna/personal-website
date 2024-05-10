import styles from './App.module.css'
import { Navigationbar } from './components/navigation_bar/Navigationbar'
import { Intro } from './components/intro/Intro'


function App() {

  return (
    <div className = {styles.App}>
      <Navigationbar />
      <Intro />
    </div>
  )
}

export default App
