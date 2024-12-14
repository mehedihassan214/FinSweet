import { Route, Routes } from "react-router"
import RootLayout from "./RootLayout/RootLayout"
import About from "./Pages/About"
import Home from "./Pages/Home"

function App() {


  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
