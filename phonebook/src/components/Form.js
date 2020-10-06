import React, { useState } from 'react'
import Notification from './Notification'
import personService from '../services/persons'

const Form = (props) => {
	const persons = props.persons, setPersons = props.setPersons
	const newName = props.newName, setNewName = props.setNewName
  const newNumber = props.newNumber, setNewNumber = props.setNewNumber
  const [ message, setMessage ] = useState(null)

	const addEntry = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons[persons.length - 1].id + 1
    }

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === personObject.name) {
        const confirm = window.confirm(newName + ' is already in the phonebook; replace old number with new one?')
        if (confirm) {
          personService.update(persons[i].id, personObject)
          setMessage(`Updated ${newName}.`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          const newPersons = [...persons]
          newPersons[i].number = newNumber
          setPersons(newPersons)
          setNewName('')
          setNewNumber('')
        }
        return
      }
    }
    
    personService.create(personObject)

    setPersons(persons.concat(personObject))
    setMessage(`Added ${newName}.`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
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
      <Notification message={message} type={'update'} />
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