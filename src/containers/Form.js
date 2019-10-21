import React, { useState } from 'react';
import { Formik } from 'formik';
import { Nav } from '../components/NavMenu';
import { Container } from '../components/styles';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { BasicForm } from '../components/form'

const StyledButton = withStyles({
    root: {
        background: "black",
        color: "white",
        height: 48,
        "&:hover": {
            color: "black",
            background: "yellow"
        }
    }
})(Button);



export const Basic = props => {

    const [setFormValues] = useState({ name: '', comment: '' })

    return (
        < div >
            <Nav />
            {/* wrapper component */}
            < Formik
                initialValues={{ name: '', comment: '' }}
                validate={values => {
                    let errors = {};
                    if (!values.name) {
                        errors.name = 'Name is Required';
                    } else if (!values.comment) {
                        errors.comment = 'Comment is required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setFormValues(values);
                    setSubmitting(false)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <form onSubmit={handleSubmit}>
                            <Container height={'200px'} top={'70px'}>
                                <OutlinedInput
                                    placeholder="name"
                                    color='primary'
                                    type="name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />

                                {errors.name && touched.name && errors.name}
                                <OutlinedInput
                                    placeholder="comment"
                                    multiline
                                    color='primary'
                                    type="comment"
                                    name="comment"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comment}
                                />
                                {errors.comment && touched.comment && errors.comment}
                                <StyledButton type="submit" disabled={isSubmitting}>
                                    Submit
                        </StyledButton>

                            </Container>
                            <div>{values.name}</div>
                            <div>{values.comment}</div>
                        </form>
                    )}
            </Formik >

            <BasicForm />
        </div >
    )

}




