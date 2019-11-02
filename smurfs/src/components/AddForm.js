import React from 'react'
import { Formik, Form, Field, withFormik } from 'formik'
import { connect, useSelector } from 'react-redux'

import { getSmurfVillage, addToVillage, editVillager } from '../actions'

const AddForm = ({ addToVillage, getSmurfVillage, editVillager }) => {
    const updateSmurf = useSelector(state => state.updateSmurf)

    const initVal = {
        id: updateSmurf.id !== undefined ? updateSmurf.id : '',
        name: updateSmurf.name !== undefined ? updateSmurf.name : '',
        age: updateSmurf.age !== undefined ? updateSmurf.age : '',
        height: updateSmurf.height !== undefined ? updateSmurf.height : ''
    }

    return (
        <Formik
            initialValues={initVal}
            onSubmit={(values, { resetForm, setSubmitting }) => {
                addToVillage(values)
                resetForm()
                setSubmitting(false)
            }}
            enableReinitialize={true}
            render={props => (
                <Form onSubmit={props.handleSubmit}>
                    <label>
                        Id:
                        <Field type='text' name='id' placeholder='' value={props.values.id} disabled/>
                    </label>

                    <label>
                        Name:
                        <Field type='text' name='name' placeholder='Joe' value={props.values.name}/>
                    </label>

                    <label>
                        Age:
                        <Field type='text' name='age' placeholder='789' value={props.values.age}/>
                    </label>

                    <label>
                        Height:
                        <Field type='text' name='height' placeholder='6cm' value={props.values.height}/>
                    </label>

                    <button type='submit'>Add to Village</button>
                    <button type='button' onClick={() => editVillager(props.values)}>Update Villager</button>
                    <button type='button' onClick={() => getSmurfVillage()}>See Village</button>
                </Form>
            )}
        />
    )
}

export default connect(null, { getSmurfVillage, addToVillage, editVillager })(AddForm)