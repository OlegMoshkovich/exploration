import React, { useState } from 'react'
import styled from 'styled-components'
import { Nav } from '../components/NavMenu'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import { Circle } from '../components/circle'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { Container } from '../components/styles'
const MaterialContainer = styled.div`
margin: 40px 0px 30px 20px;
width:300px;
height:400px;
justify-content: space-between;
display:flex;
flex-direction:column;
`
const styles = theme => ({
    root: {
        "& $notchedOutline": {
            border: '3px solid green'
        },
        "&:hover $notchedOutline": {
            border: '3px solid green'
        },
        "&$focused $notchedOutline": {
            border: '3px solid green'
        }
    },
    focused: {},
    notchedOutline: {
        border: '3px solid green'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
        margin: '10px 0px 0px 0px'

    },
    input: {
        border: 'red'
    }
});

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FF00D6",
        },
        secondary: {
            main: "#B7F1FD",
        }
    },
    shape: {
        borderRadius: 50
    },
    ripple: {
        color: 'red',
    },

})

const StyledButton = withStyles({
    root: {
        // background: "black",
        // color: "white",
        // height: 48,
        "&:hover": {
            color: "black",
            background: "yellow"
        }
    }
})(Button);

const singleCircle = {
    width: "30px",
    animation: [
        // { marginBottom: '100px' },
        { scale: .3 },
    ]
}

const Material = (props) => {
    const [message, setMessage] = useState('...')
    const [circles, setCircles] = useState([singleCircle])
    const classes = props.classes;
    const [start, setStart] = useState(false)
    const Add = () => {
        if (circles.length < 10) {
            setCircles([...circles, {
                width: "30px",
                animation: [
                    // { marginBottom: '100px' },
                    { scale: .3 },
                ]
            }])
        }
    }

    const Subtract = () => {
        if (circles.length > 1) {
            circles.pop()
            setCircles([...circles])
        }
    }
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <MaterialContainer>
                    <div>Material seems to dominate</div>
                    <div className={classes.container}>
                        <Container direction={'column'} >
                            {circles.map((component, index) => {
                                return (

                                    <Circle
                                        key={index + "Material circles"}
                                        repeat={1}
                                        width={component.width}
                                        animation={component.animation}
                                        index={index + "Material"}

                                    />

                                );
                            })}

                        </Container>

                        <StyledButton variant="contained" color="secondary" size='small' onClick={() => Add()}>
                            {/* <Icon color='primary'>alarm</Icon> */}
                            <AddIcon color="primary" />
                        </StyledButton>

                        <StyledButton variant="contained" color="secondary" size='small' onClick={() => { Subtract() }}>
                            <RemoveIcon color="primary" />
                        </StyledButton>
                    </div>
                    <OutlinedInput
                        color='secondary'
                        label="Simple message" onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        inputprops={{
                            endAdornment: <InputAdornment position="end" variant="outlined"><Icon color='primary'>alarm</Icon></InputAdornment>,
                        }}
                    />
                    <div className={classes.container} >{message}</div>
                    <StyledButton variant="contained" color="secondary" size='small' onClick={() => (setStart(!start))}>
                        start
                    </StyledButton>
                </MaterialContainer>
            </MuiThemeProvider>
            <Nav />
        </div >
    )
}

export default withStyles(styles)(Material)