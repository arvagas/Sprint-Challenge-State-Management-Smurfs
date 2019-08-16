import React from "react"
import { useSelector } from 'react-redux'

import AddForm from './AddForm'
import SmurfCard from './SmurfCard'

import "./App.css"

const App = () => {
  const smurfs = useSelector(state => state.smurfs)
  const error = useSelector(state => state.error)

  return (
    <div>
      <AddForm />
      
      {error !== '' ? <h2>{error}</h2> : ''}

      {smurfs.map(smurf => (
        <SmurfCard key={smurf.id} smurf={smurf}/>
      ))}
    </div>
  )
}

export default App
