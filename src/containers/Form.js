import React, { useState } from 'react';
import { Formik } from 'formik';
import { Nav } from '../components/NavMenu'
import { Container } from '../components/styles'



export const Basic = () => {
    const [formValues, setFormValues] = useState({ name: '', comment: '' })
    return (
        < div >
            < h1 > Anywhere in your app!</h1 >
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
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
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
                                <input
                                    type="name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.name && touched.name && errors.name}
                                <input
                                    type="comment"
                                    name="comment"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comment}
                                />
                                {errors.comment && touched.comment && errors.comment}
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                        </button>
                                <div>{values.name}</div>
                                <div>{values.comment}</div>
                            </Container>
                        </form>
                    )}
            </Formik >

        </div >
    )

}




