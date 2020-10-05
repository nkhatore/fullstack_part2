import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter search={search} setSearch={setSearch} />
      <h3>Add Entry</h3>
        <Form persons={persons} setPersons={setPersons}
              newName={newName} setNewName={setNewName}
              newNumber={newNumber} setNewNumber={setNewNumber}
        />
      <h3>Numbers</h3>
        <Persons search={search} persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App
