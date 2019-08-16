import React from 'react'
import { Formik, Form, Field, withFormik } from 'formik'
import { connect, useSelector } from 'react-redux'

import { getSmurfVillage, addToVillage, editVillager } from '../actions'

const JSXForm = ({ addToVillage, getSmurfVillage, editVillager }) => {
    const updateSmurf = useSelector(state => state.updateSmurf)

    return (
        <Formik
            initialValues={{
                id: updateSmurf.id,
                name: updateSmurf.name,
                age: updateSmurf.age,
                height: updateSmurf.height
            }}
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

const AddForm = withFormik({
    mapPropsToValue({ id, name, age, height }) {
        return {
            id: id || '',
            name: name || '',
            age: age || '',
            height: height || ''
        }
    },

    // validationSchema

    handleSubmit(values, { props, resetForm, setSubmitting }) {
        props.addToVillage(values)
        resetForm()
        setSubmitting(false)
    }
})(JSXForm)

export default connect(null, { getSmurfVillage, addToVillage, editVillager })(AddForm)