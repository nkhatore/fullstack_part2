import React from 'react'
import personService from '../services/persons'

const Form = (props) => {
	const persons = props.persons, setPersons = props.setPersons
	const newName = props.newName, setNewName = props.setNewName
	const newNumber = props.newNumber, setNewNumber = props.setNewNumber

	const addEntry = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === personObject.name) {
        const confirm = window.confirm(newName + ' is already in the phonebook; replace old number with new one?')
        if (confirm) {
          personService.update(persons[i].id, personObject)
          setNewName('')
          setNewNumber('')
        }
        return
      }
    }
    
    personService.create(personObject)

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
	}
	
	const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

	return (
		<form onSubmit={addEntry}>
			<div>
				name: <input value={newName} onChange={handleNewName} />
			</div>
			<div>
				number: <input value={newNumber} onChange={handleNewNumber}/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
    </form>
	)
}

export default Form