import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import Form from './Form'
import Persons from './Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
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
        <Persons search={search} persons={persons} />
    </div>
  )
}

export default App
