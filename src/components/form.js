import React, { useState } from 'react';
import { Formik } from 'formik';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: ${props => props.top || "00px"};
  left:'0px';
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  align-direction: center;
  justify-content: space-around;
  height: ${props => props.height || '200px'};
  width: ${props => props.width || '200px'};
`;


export const BasicForm = props => {
    const [formValues, setFormValues] = useState({})
    const [color, setColor] = useState('black')

    const StyledButton = withStyles({
        root: {
            background: color,
            color: "white",
            height: 48,
            "&:hover": {
                color: "black",
                background: "yellow "
            }
        }
    })(Button);


    return (
        <div>
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
                    Object.keys(formValues).length === 0 ? setColor('black') : setColor('yellow')
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
                }) => (
                        <form onSubmit={handleSubmit}>
                            <Container height={'200px'} top={'70px'}>
                                <OutlinedInput
                                    multiline
                                    style={{ backgroundColor: '#B7F1FD' }}
                                    placeholder="name"
                                    color='yellow'
                                    type="name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />

                                {errors.name && touched.name && errors.name}
                                <OutlinedInput
                                    style={{ backgroundColor: '#B7F1FD' }}
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
                                <StyledButton type="submit" disabled={isSubmitting}
                                // onClick={alert('here you go')}
                                >
                                    Submit
                                 </StyledButton>

                            </Container>
                            <div>{values.name}</div>
                            <div>{values.comment}</div>
                        </form>
                    )}
            </Formik >


        </div>
    )
}




