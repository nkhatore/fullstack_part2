import React from 'react'
import personService from '../services/persons'

const Persons = (props) => {
	const search = props.search
	const persons = props.persons
	const setPersons = props.setPersons

	const selectPersons = () => {
		//let filtered = []
		if (search) {
			return persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
		} else {
			return persons
		}
		//return filtered
	}

	const removePerson = person => {
		const confirm = window.confirm(`Delete ${person.name}?`)
		if (confirm) {
			personService.erase(person)
			setPersons(persons.filter(p => p.id !== person.id))
		}
	}

	return (
		<div>
			{selectPersons().map(person => 
				<>
					<p>{person.name} {person.number}</p>
					<button onClick={() => removePerson(person)}>Delete</button>	
				</>
			)}
		</div>
	)
}

export default Persons