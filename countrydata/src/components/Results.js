import React from 'react'
import Country from './Country'

const Results = ({ results }) => {
  if (results.length === 0) {
    return (<div></div>)
  } else if (results.length === 1) {
    return (<Country country={results[0]} />)
  }
  return (
    <div>
      {results.map(country => <p>{country.name}</p>)}
    </div>
  )
}

export default Results