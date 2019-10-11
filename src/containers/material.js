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
import { withStyles } from '@material-ui/core/styles';
import { Circle } from '../components/circle'
import { cipher } from 'node-forge';

const MaterialContainer = styled.div`
margin: 40px 0px 0px 20px;
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

const Material = (props) => {
    const [message, setMessage] = useState('message')
    const [circles, setCircles] = useState([{
        width: "30px",
        animation: [
            { marginBottom: '100px' },
            { scale: .3 },
        ]
    }])

    const Add = () => {
        setCircles([...circles, {
            width: "30px",
            animation: [
                { marginBottom: '100px' },
                { scale: .3 },
            ]
        }])

    }
    const Subtract = () => {
        if (circles.length > 1) {
            const newCircles = circles.pop()
            console.log('updated circles', circles)
            setCircles([...circles])
        }


    }

    const classes = props.classes;
    return (
        <div>
            <MaterialContainer>
                <div>Material seems to dominate</div>
                <div className={classes.container}>
                    <Button variant="contained" color="secondary" onClick={() => Add()}>
                        <AddIcon />
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => { Subtract() }}>

                        <RemoveIcon />
                        {/* <Icon>location_on</Icon> */}
                        {/* find me */}
                    </Button>
                </div>

                <TextField label="Basic TextField" />

                <TextField label="Length" onChange={(e) => setMessage(e.target.value)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><AddIcon /></InputAdornment>,
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

            <Nav />
        </div >
    )
}
export default withStyles(styles)(Material)