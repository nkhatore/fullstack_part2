import React, { useState } from 'react'
import Filter from './Filter'
import Form from './Form'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

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
