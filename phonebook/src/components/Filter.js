import React from 'react'

const Filter = (props) => {
	const search = props.search, setSearch = props.setSearch

	const handleSearch = (event) => {
    setSearch(event.target.value)
  }

	return (
		<div>
			search: <input value={search} onChange={handleSearch} />
		</div>
	)
}

export default Filter
