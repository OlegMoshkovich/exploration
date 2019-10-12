import React from 'react'
import styled from 'styled-components'
import { Nav } from '../components/NavMenu'
import { AppContainer } from '../components/styles'

const TinyConainer = styled.div`
font-family: 'Nunito', sans-serif;
font-size:40px;
margin: 20px 0px 0px 20px;
color: white;

`


export const Tiny = () => {
    return (
        <AppContainer width={'1000px'} height={'1000px'}>

            <TinyConainer>
                <div>Tiny work goes here</div>
                <div>Light weight runtime for unity</div>

                {/* <iframe src="https://en.wikipedia.org"></iframe> */}

            </TinyConainer>


            <Nav />
        </AppContainer>
    )
}