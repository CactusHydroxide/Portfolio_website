import { useState } from 'react'
import './App.scss'
import InitialLoad from './components/InitialLoad'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  let [initRender, setInitRender] = useState<boolean>(true)

  return (
    <>
      {
        initRender ?
          /* Initial landing screen. */
          <InitialLoad setInitRender={setInitRender} />
          :
          /* Application Components */
          <>
            <NavBar />
            <Banner />

            <p>About</p>
            <p>Skillset</p>
            <p>Experience</p>
            <Contact />
            <Footer />
          </>
      }
    </>
  )
}

export default App
