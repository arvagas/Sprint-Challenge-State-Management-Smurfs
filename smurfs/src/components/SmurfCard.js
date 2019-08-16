import React from 'react'
import { connect } from 'react-redux'

import { smurfToUpdate, exileVillager } from '../actions'

const SmurfCard = ({ smurf, smurfToUpdate, exileVillager }) => {
    return (
        <div style={{border:'solid black 1px', padding:'10px', margin:'2rem'}}>
            <h3>{smurf.name}</h3>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button onClick={() => smurfToUpdate(smurf)}>Edit</button>
            <button onClick={() => exileVillager(smurf)}>Exile</button>
        </div>
    )
}

export default connect(null, { smurfToUpdate, exileVillager })(SmurfCard)