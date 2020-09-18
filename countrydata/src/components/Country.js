import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
	// const key = process.env.REACT_APP_API_KEY
	// const [ weather, setWeather ] = useState({})
	// console.log(country)

	// const weatherHook = () => {
	// 	axios
	// 		.get('https://api.weatherstack.com/current?access_key=' + key + '&query=' + country.capital)
	// 		.then(response => {
	// 			console.log('data', response.data)
	// 			setWeather(response.data)
	// 		})
	// }

	// useEffect(weatherHook)

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
			{/* <div>
				<h3>Weather in {country.capital}</h3>
				<p>Temperature: {weather.current.temperature} Celsius</p>
				<img src={weather.current.weather_icons[0]} alt={'Weather in ' + country.capital} width='50%' height='50%' />
				<p>Wind: {weather.current.wind_speed} mph {weather.current.wind_dir}</p>
			</div> */}
		</div>
	)
} 

export default Country