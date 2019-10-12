import React, { useState } from 'react'
import styled from 'styled-components'
import { Nav } from '../components/NavMenu'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import InputAdornment from '@material-ui/core/InputAdornment';
import { fade, withStyles } from '@material-ui/core/styles';
import { Circle } from '../components/circle'
import { cipher } from 'node-forge';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { borderRadius } from '@material-ui/system';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';


const MaterialContainer = styled.div`
margin: 40px 0px 30px 20px;
width:300px;
height:400px;
justify-content: space-between;
display:flex;
flex-direction:column;
`
const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
        margin: '10px 0px 0px 0px'
    }
});

const theme = createMuiTheme({
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
    }

})

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        borderBottom: '1px solid pink',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

const singleCircle = {
    width: "30px",
    animation: [
        // { marginBottom: '100px' },
        { scale: .3 },
    ]
}

const Material = (props) => {
    const [message, setMessage] = useState('message')
    const [circles, setCircles] = useState([singleCircle])
    const classes = props.classes;

    const Add = () => {
        if (circles.length < 5) {
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
                        <Button variant="contained" color="secondary" onClick={() => Add()}>
                            <AddIcon color="primary" />
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => { Subtract() }}>
                            <RemoveIcon color="primary" />
                        </Button>
                    </div>
                    <TextField label="Basic TextField" />

                    <FormControl className={classes.margin}>
                        <InputLabel shrink >
                            Input
                        </InputLabel>
                        <BootstrapInput defaultValue="" />
                    </FormControl>
                    <TextField label="Length" onChange={(e) => setMessage(e.target.value)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end" variant="outlined"><Icon color='primary'>alarm</Icon></InputAdornment>,
                        }}
                    />
                    <div className={classes.container} >{message}</div>
                </MaterialContainer>

                <div className={classes.container}>
                    {circles.map((component, index) => {
                        return (
                            <div >
                                <Circle
                                    repeat={1}
                                    width={component.width}
                                    animation={component.animation}
                                    index={index}
                                    key={index}
                                />
                            </div>
                        );
                    })}
                </div>
            </MuiThemeProvider>
            <Nav />
        </div >
    )
}

export default withStyles(styles)(Material)