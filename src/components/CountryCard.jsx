const CountryCard = (props) => {
  const {name, capital, population, flag, region, translations} = props

  return (
    <div style={{ background: name.length > translations.hu.length ? "salmon":"" }}>
        <img src={flag} alt={name} />
        <h2>{translations.hu}</h2>
        {name !== translations.hu && <h3>{name}</h3>}
        <div><strong>Population: </strong>{population}</div>
        <div><strong>Capital: </strong>{capital}</div>
        <div><strong>Region: </strong>{region}</div>
    </div>
  )
}

export default CountryCard