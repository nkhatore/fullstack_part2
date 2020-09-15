import React from 'react'

const Persons = (props) => {
	const search = props.search
	const persons = props.persons

	const selectPersons = () => {
		let filtered = []
		if (search) {
			filtered = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
		} else {
			filtered = persons
		}
		return filtered
	}

	return (
		<div>
			{selectPersons().map(person => <p>{person.name} {person.number}</p>)}
		</div>
	)
}

export default Persons