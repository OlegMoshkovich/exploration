import React, { useState } from 'react';
import { Formik } from 'formik';

import { Button } from '@material-ui/core';

import { withStyles, makeStyles } from '@material-ui/core/styles';
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
        background: 'white',
        border: '2px solid yellow',
        borderRadius: 3,
        color: 'black',
        height: 30,
        // padding: '0 30px',
        "&:: placeholder": {
            color: 'blue',
            fontSize: '10px'
        },
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

        < Formik
            initialValues={{ name: '', comment: '' }}
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
            }) => (

                    < form onSubmit={handleSubmit}>
                        <Container >
                            <OutlinedInput
                                placeholder="name"
                                color='primary'
                                // className={classes.root}
                                color='primary'
                                type="name"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={formValues.name}
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
                            // className={classes.root}
                            />
                            {errors.comment && touched.comment && errors.comment}
                            <StyledButton type="submit" disabled={isSubmitting}>
                                Submit
                        </StyledButton>
                            <div>{values.name}</div>
                            <div>{values.comment}</div>
                        </Container>
                    </form>
                )
            }
        </Formik >
    )

}




