import { useState } from 'react'
import './App.scss'
import InitialLoad from './components/InitialLoad'
import NavBar from './components/Navbar'
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
            <div style={{ height: 'calc(2*100vh)' }}>
              testing
            </div>
            <Footer />
          </>
      }
    </>
  )
}

export default App
