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
        <div >
            < Formik
                initialValues={{ field1: '', field2: '' }}

                validate={values => {
                    let errors = {};
                    if (!values.field1) {
                        errors.field1 = 'Required';
                    } else if (!values.field2) {
                        errors.field2 = 'Required';
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
                                    placeholder="field1"
                                    color='yellow'
                                    type="field1"
                                    name="field1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.field1}
                                />

                                {errors.field1 && touched.field1 && errors.field1}
                                <OutlinedInput
                                    style={{ backgroundColor: '#B7F1FD' }}
                                    placeholder="field2"
                                    multiline
                                    color='primary'
                                    type="field2"
                                    name="field2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.field2}
                                />
                                {errors.field2 && touched.field2 && errors.field2}
                                <StyledButton type="submit" disabled={isSubmitting}
                                    onClick={() => props.captureInput(formValues)}
                                >
                                    Submit
                                 </StyledButton>

                            </Container>
                            <div>{values.field1}</div>
                            <div>{values.field2}</div>
                        </form>
                    )}
            </Formik >


        </div>
    )
}




