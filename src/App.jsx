import { useEffect, useState } from "react"
import CountryCard from "./components/CountryCard"

function App() {
  const [countries, setCountries] = useState()
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"]
  const [selectedRegion, setSelectedRegion] = useState(regions[0])
  const [textSearch, setTextSearch] = useState("")

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

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
      </div>
      <section className="cardWrapper">
        {countries && filterByName(filterByRegion(countries)).map(country => <CountryCard {...country} />)}
      </section>
    </>
  )
}

export default App
