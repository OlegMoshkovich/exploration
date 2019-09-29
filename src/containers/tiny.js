import React from 'react'
import styled from 'styled-components'
import { Nav } from '../components/NavMenu'

const TinyConainer = styled.div`
font-family: 'Nunito', sans-serif;
font-size:40px`


export const Tiny = () => {
    return (
        <div>
            <TinyConainer>Tiny work goes here</TinyConainer>
            <Nav />
        </div>
    )
}