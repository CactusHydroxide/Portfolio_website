import { useRef, useState } from 'react'
import './App.scss'
import InitialLoad from './components/InitialLoad'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [initRender, setInitRender] = useState<boolean>(true)
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>

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
            <div id='contentConatiner'
              ref={containerRef}
            >
              <Banner />
              <p>About</p>
              <p>Skillset</p>
              <p>Experience</p>
              <Contact containerRef={containerRef} />
              <Footer />
            </div>
          </>

      }
    </>
  )
}

export default App
