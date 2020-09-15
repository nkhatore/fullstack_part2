import React from 'react'

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
        window.alert(newName + ' is already in the phonebook.')
        return
      }
    }

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