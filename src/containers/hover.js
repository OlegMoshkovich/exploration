import React from 'react';
import styled from 'styled-components';
import { Circle } from '../components/circle'


const Link = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: white;
  width:100px;
  height:48px;
  border: 1px solid black;

`;
const Icon = styled.div`

  flex: none;
  color:transparent;
  transition: fill 0.25s;
//   width: 48px;
//   height: 48px;
  ${Link}:hover & {
    color:black;
  }
`;



export const Hover = () => {
    return (
        <div>
            <Link href="#">

                <Icon >
                    home
                </Icon>
                <Circle width={"30px"} animation={[{ scale: 0.7 }]} repeat={1} />

            </Link>


        </div>
    )
}