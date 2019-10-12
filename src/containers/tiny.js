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
                <a href='https://unity.com/solutions/instant-games' target='_blank'>info about the runtime</a>
                <a style={{ display: 'block' }} href='https://www.youtube.com/watch?v=-yubuk7jAb4%26list=PLX2vGYjWbI0TPRStIWx3UyNB8QqjNUj98%26index=2%26t=0s' target='_blank' >tutorial video</a>
            </TinyConainer>



            <Nav />
        </AppContainer>
    )
}