import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const DetailPage = () => {
  const params = useParams()  
  const [country, setCountry] = useState()

  useEffect(()=>{
    fetch("/data.json")
    .then(response => response.json())
    .then(data => {
        let temp = data.find(element => element.alpha3Code.toUpperCase() == params.code.toUpperCase())

        if(temp){
            setCountry(temp)
        }else{
            alert("Nincs ilyen ország!")
        }
    })
  },[params])

  if(!country) return <div>Loading...</div>

  return (
    <div>
        <img style={{ maxWidth: "min(500px, 80vw)"}} src={country.flag}/>
        <h1>{country.name}</h1>
        <h2>{country.translations.hu}</h2>
        <div><strong>Population: </strong> {country.population}</div>
        <div><strong>Capital: </strong> {country.capital}</div>
        <div><strong>Area: </strong> {country.area}</div>
        <hr />
        <div><strong>Region: </strong> {country.region}</div>
        <div><strong>Subregion: </strong> {country.subregion}</div>
        <hr />
        {country.borders?.map(border => <Link to={"/detail/" + border}>{border}</Link>)}
    </div>
  )
}

export default DetailPage