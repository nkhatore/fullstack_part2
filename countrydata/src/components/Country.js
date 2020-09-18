import React from 'react'

const Country = ({ country }) => {
	return (
		<div>
			<h2>{country.name}</h2>
			<p>Capital: {country.capital}</p>
			<p>Population: {country.population}</p>
			<h3>Languages:</h3>
			<ul>
				{country.languages.map(lang => <li>{lang.name}</li>)}
			</ul>
			<img src={country.flag} alt={'Flag of ' + country.name} width='10%' height='10%' />
		</div>
	)
} 

export default Country