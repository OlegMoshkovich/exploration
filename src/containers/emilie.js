import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
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
        </Container>
    )
}