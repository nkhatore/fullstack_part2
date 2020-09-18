import React from 'react'
import Country from './Country'

const Results = ({ results, clickedIndex, setClickedIndex}) => {

  const handleClick = (event) => {
    console.log(event.target.id)
    setClickedIndex(event.target.id)
  }

  if (results.length === 0) {
    return (<div></div>)
  } else if (results.length === 1) {
    return (<Country country={results[0]} />)
  } else if (results.length > 10) {
    return (<p>Too many results, be more specific.</p>)
  }
  
  if (clickedIndex > -1) {
    return (<Country country={results[clickedIndex]} />)
  }
  return (
    <div>
      {results.map((country, i) => 
        <>
          <p>{country.name}</p><button onClick={handleClick} id={i}>Show</button>
        </>
      )}
    </div>
  )
}

export default Results