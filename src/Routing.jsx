import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { useEffect, useState } from "react"
import DetailPage from "./DetailPage"

const Routing = () => {
  const [isDarkMode, setIsDarkMode] = useState((new Date()).getHours() >= 18)

  useEffect(()=>{
    document.body.className = isDarkMode ? "dark" : "light"
  }, [isDarkMode])

  return (
    <BrowserRouter>
        <nav>
            <button onClick={()=>setIsDarkMode(prev => !prev)}>
          {isDarkMode ? "🌛" : "🌞"}
            </button>
        </nav>
        <Routes>
            <Route path="" element={<App/>} />
            <Route path="/detail/:code" element={<DetailPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing