import { useEffect, useState } from "react"
import CountryCard from "./components/CountryCard"

function App() {
  const [countries, setCountries] = useState()
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"]
  const [selectedRegion, setSelectedRegion] = useState(regions[0])
  const [textSearch, setTextSearch] = useState("")

  const [isDarkMode, setIsDarkMode] = useState((new Date()).getHours() >= 18) 

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  useEffect(()=>{
    document.body.className = isDarkMode ? "dark" : "light"
  }, [isDarkMode])

  const filterByRegion = (pre) => {
    if (selectedRegion === "All") return pre

    return pre.filter(li => li.region === selectedRegion)
  }

  const filterByName = (pre) => {
    return pre.filter(element => element.name.includes(textSearch))
  }

  return (
    <>
      <div>
        <input type="text" value={textSearch} onChange={(e) => setTextSearch(e.target.value)} />

        <select onChange={(e) => setSelectedRegion(e.target.value)}>
          {regions.map(region => <option value={region}>{region}</option>)}
        </select>

        <button onClick={()=>setIsDarkMode(prev => !prev)}>
          {isDarkMode ? "🌛" : "🌞"}
        </button>
      </div>
      <section className="cardWrapper">
        {countries && filterByName(filterByRegion(countries)).map(country => <CountryCard {...country} />)}
      </section>
    </>
  )
}

export default App
