import React from 'react'
import styled from 'styled-components'
import { Nav } from '../components/NavMenu'

const TinyConainer = styled.div`
font-family: 'Nunito', sans-serif;
font-size:40px;
margin: 20px 0px 0px 20px
`


export const Tiny = () => {
    return (
        <div>
            <TinyConainer>
                <div>Tiny work goes here</div>
                <iframe src="https://en.wikipedia.org"></iframe>

            </TinyConainer>
            <p>simple experiment with iframes -- kind of broken.</p>

            <Nav />
        </div >
    )
}