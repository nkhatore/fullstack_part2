import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Results from './components/Results'

const App = () => {
  const [ search, setSearch ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ results, setResults ] = useState([])
  const [ clickedIndex, setClickedIndex ] = useState(-1)

  const hook = () => {
    // console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log(response.data)
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handleSearch = (event) => {
    // console.log(event.target.value)
    setSearch(event.target.value)
    setClickedIndex(-1)
    if (event.target.value) {
      setResults(countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase())))
    } else {
      setResults([])
    }
  }

  return (
    <div>
      find countries: <input value={search} onChange={handleSearch} />
      <div>
        <Results results={results} clickedIndex={clickedIndex} setClickedIndex={setClickedIndex} />
      </div>
    </div>
  )
}

export default App
