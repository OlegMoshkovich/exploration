import React from 'react';
import { LinkCircle, LinkContainer } from './styles'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <LinkContainer>
            <Link to={'/map'}><LinkCircle>map</LinkCircle></Link>

            <Link to={'/'}><LinkCircle>home</LinkCircle></Link>
            <Link to={'/tiny'}><LinkCircle>timy</LinkCircle></Link>
        </LinkContainer>

    )

}