import React from 'react'
import { Form, Field, withFormik } from 'formik'
import { connect } from 'react-redux'

const JSXForm = () => {
    return (
        <Form>
            <label>
                Name:
                <Field type='text' name='name' placeholder='Joe' />
            </label>

            <label>
                Age:
                <Field type='text' name='age' placeholder='789' />
            </label>

            <label>
                Height:
                <Field type='text' name='height' placeholder='6cm' />
            </label>

            <button type='submit'>Add to Village</button>
        </Form>
    )
}

const AddForm = withFormik({
    mapPropsToValue({ name, age, height }) {
        return {
            name: name || '',
            age: age || '',
            height: height || ''
        }
    },

    // validationSchema

    handleSubmit(values, { props, resetForm, setSubmitting }) {
        //fn here
        resetForm()
        setSubmitting(false)
    }
})(JSXForm)

export default connect(null, { })(AddForm)