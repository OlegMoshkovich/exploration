import React, { useState } from 'react';
import { Formik } from 'formik';
import { Container } from './styles';
import { Button } from '@material-ui/core';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput'


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




const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        "&:focused": {
            border: '3px solid red'
        },
        "&:after": {
            border: '3px solid red'
        }
    },
});


export const BasicForm = props => {

    const [formValues, setFormValues] = useState({ name: '', comment: '' })
    const classes = useStyles();
    return (

        < div >
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
                                    // style={{ border: '1px, solid, green' }}
                                    className={classes.root}
                                    // label="Simple message" onChange={(e) => setMessage(e.target.value)}
                                    // InputProps={{
                                    //     endAdornment: <InputAdornment position="end" variant="outlined"><Icon color='primary'>alarm</Icon></InputAdornment>,
                                    // }}
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
                                <div>{values.name}</div>
                                <div>{values.comment}</div>
                            </Container>
                        </form>
                    )}
            </Formik >

        </div >
    )

}




