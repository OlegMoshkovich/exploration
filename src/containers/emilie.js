import React from 'react'
import styled from 'styled-components'
import { Icon } from '../components/Icon'

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Image = styled.img`
width:50%;
height:50%;
`

export const emilie = () => {
    return (
        <Container>
            <Image src={'./emilie-01.png'} />
            <div style={{ width: '50%', height: '50%' }}>
                <Icon />
            </div>

        </Container>
    )
}