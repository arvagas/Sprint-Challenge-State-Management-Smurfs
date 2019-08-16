import React from "react"
import { useSelector } from 'react-redux'

import AddForm from './AddForm'
import SmurfCard from './SmurfCard'

import "./App.css"

const App = () => {
  const smurfs = useSelector(state => state)
  console.log(smurfs)

  return (
    <div>
      <AddForm />
      {smurfs.map(smurf => (
        <SmurfCard key={smurf.id} smurf={smurf}/>
      ))}
    </div>
  )
}

export default App
