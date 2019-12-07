import React, { useState } from 'react'
import '../styles/App.css'
import styled from 'styled-components'

const RectAdmin = styled.rect`
stroke: #02a0a9;
fill:${props => props.state ? 'transparent' : 'red'};
cursor: pointer;
`
const RectUser = styled.rect`
stroke: #02a0a9;
fill:${props => props.state ? 'transparent' : 'green'};
cursor: pointer;
`
const RectCoordinator = styled.rect`
stroke: #02a0a9;
fill: ${ props => props.state ? 'transparent' : 'blue'};
`
const RoleAdmin = styled.polygon`
stroke: #02a0a9;
fill: ${ props => props.state ? 'transparent' : 'red'};
cursor: pointer;
`
const RoleSite = styled.polygon`
stroke: #02a0a9;
fill: ${ props => props.state ? 'transparent' : 'red'};
cursor: pointer;
`

const Role = styled.polygon`
stroke: #02a0a9;
fill: transparent;
`
const Poly = styled.polyline`
stroke: ${ props => props.state ? '#02a0a9' : 'red'};
stroke-width: ${ props => props.state ? '1' : '2'};
fill: transparent;
`
const Text1 = styled.text`
font-size: 10px;
`
const Text2 = styled.text`
font-size: 14px;
`


export const Icon = () => {
    const [color, setColor] = useState(true)
    const [rectUser, setRectUser] = useState(true)
    const [rectSite, setRectSite] = useState(true)

    const [polycolor, setPolycolor] = useState(true)


    return (


        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.36 478.48">

            <path class="cls-1" d="M101,187.84" transform="translate(-53.55 -49.1)" />
            <Role class="cls-2" points="80.33 132.01 70.13 132.01 69 108.22 66.73 87.83 64.47 87.83 63.34 107.08 64.47 133.14 52.01 134.28 52.01 130.88 59.94 129.75 58.8 107.08 57.67 86.69 56.54 77.63 56.54 57.23 52.01 62.9 54.27 68.56 54.27 73.1 49.74 65.17 48.61 61.77 55.4 44.77 59.94 42.51 59.94 39.11 57.67 32.31 62.2 28.91 65.6 32.31 64.47 37.97 63.34 41.37 65.6 43.64 76.93 58.37 79.2 60.63 76.93 62.9 70.13 56.1 70.13 73.1 71.27 91.22 72.4 108.22 73.53 126.35 80.33 129.75 80.33 132.01" />
            <Role class="cls-2" points="99.59 133.14 99.59 134.28 93.92 134.28 92.79 130.88 91.66 120.68 91.66 112.75 88.26 112.75 88.26 120.68 89.39 134.28 83.73 135.41 82.6 133.14 87.13 132.01 84.86 120.68 84.86 112.75 75.8 112.75 80.33 84.43 74.67 76.5 75.8 65.17 79.2 56.1 81.46 52.7 81.46 49.3 80.33 44.77 80.33 39.11 86 39.11 87.13 43.64 87.13 48.17 86 50.44 93.92 56.1 95.06 65.17 97.32 77.63 95.06 79.89 96.19 88.96 100.72 110.48 93.92 111.62 93.92 120.68 95.06 130.88 99.59 133.14" />
            <Role class="cls-2" points="438.61 30.45 434.61 46.45 424.61 58.45 425.61 82.45 425.61 107.45 425.61 130.45 429.61 131.45 429.61 133.45 422.61 134.45 420.61 107.45 419.61 89.45 417.61 89.45 416.61 107.45 415.61 133.45 408.61 133.45 408.61 131.45 411.61 130.45 410.61 107.45 411.61 89.45 412.61 60.45 403.61 49.45 398.61 30.45 400.61 29.45 406.61 47.45 412.61 54.45 416.61 53.45 416.61 50.45 414.61 43.45 417.61 38.45 419.61 39.45 422.61 42.45 420.61 47.45 420.61 53.45 424.61 54.45 431.61 45.45 436.61 30.45 438.61 30.45" />


            <RectCoordinator state={rectSite} onClick={() => { setRectSite(!rectSite) }} class="cls-4" x="369.61" y="153.45" width="86" height="86" />

            <RoleAdmin class="admin" state={color} onClick={() => { setColor(!color) }} class="cls-2" points="260.69 133.54 260.69 136.2 254.05 136.2 251.39 120.27 250.07 110.98 247.41 110.98 247.41 120.27 248.74 134.87 242.1 136.2 242.1 134.87 246.08 133.54 244.76 120.27 243.43 110.98 231.48 110.98 238.12 75.14 231.48 67.17 232.81 57.88 240.78 40.63 240.78 36.65 238.12 28.68 239.45 24.7 244.76 24.7 246.08 28.68 246.08 35.32 244.76 37.97 252.72 43.28 258.03 67.17 255.38 73.81 263.34 108.32 254.05 109.65 255.38 120.27 255.38 132.22 260.69 133.54" />

            <RectAdmin state={color} onClick={() => { setColor(!color) }} class="cls-4" x="201.48" y="151.7" width="86" height="87.32" />
            <RectAdmin state={color} onClick={() => { setColor(!color) }} class="cls-5-rec" x="117.61" y="327.02" width="64.42" height="48" />
            <RectAdmin state={color} onClick={() => { setColor(!color) }} class="cls-5-rec" x="306.69" y="327.02" width="64.42" height="42" />
            <RectAdmin state={color} onClick={() => { setColor(!color) }} class="cls-5-rec" x="209.61" y="359.02" width="82" height="73" />
            <RectAdmin state={color} class="cls-5-rec" x="116.61" y="390.02" width="64" height="42" />
            <RectCoordinator state={rectSite} class="cls-5-rec" x="306.69" y="327.02" width="64.42" height="42" />

            <polyline class="cls-4" points="118.11 350.52 64.11 350.52 64.61 239.52" />

            <Poly state={color} points="265.11 239.52 265.11 312.35 331.11 312.35 331.11 327.52" />
            <Poly state={color} points="246.11 239.52 246.11 359.52" />
            <Poly state={color} points="223.11 239.52 222.57 314.02 159.11 314.02 159.11 327.04" />
            <Poly state={color} points="233.72 239.52 233.72 324.02 199.61 324.02 199.61 411.02 181.11 411.02" />


            <line class="cls-4" x1="287.48" y1="195.02" x2="369.61" y2="195.02" />
            <polyline class="cls-4" points="412.61 248.02 412.61 446.52 47.61 446.52 47.61 238.73" />
            <line class="cls-4" x1="340.33" y1="446.52" x2="340.33" y2="369.02" />
            <polyline class="cls-4" points="390.11 239.52 390.11 312.52 348.11 312.52 348.11 327.52" />

            <line class="cls-4" x1="149.11" y1="375.21" x2="149.11" y2="390.02" />
            <RectUser state={rectUser} onClick={() => { setRectUser(!rectUser) }} class="cls-3" x="86.91" y="202.01" width="86" height="86.1" transform="translate(-51.1 -50.38) rotate(0.57)" />
            <RectUser state={rectUser} onClick={() => { setRectUser(!rectUser) }} class="cls-3" x="118.59" y="255.02" width="64.42" height="33" />
            <RectUser state={rectUser} class="cls-5-rec" x="117.61" y="327.02" width="64.42" height="48" />

            {/* <rect class="cls-6" x="222.07" y="299.16" width="1.2" height="2.3" />
            <rect class="cls-6" x="198.99" y="340.37" width="1.2" height="2.3" />
            <rect class="cls-6" x="245.5" y="340.37" width="1.2" height="2.3" />
            <rect class="cls-6" x="255.5" y="340.37" width="1.2" height="2.3" />

 */}

            <polyline class="cls-4" points="91.11 239.52 91.11 271.52 118.61 271.52" />
            {/* <rect class="cls-6" x="233.12" y="299.16" width="1.2" height="2.3" />
            <rect class="cls-6" x="245.5" y="299.16" width="1.2" height="2.3" />
            <rect class="cls-6" x="255.5" y="299.16" width="1.2" height="2.3" />
            <rect class="cls-6" x="264.5" y="299.16" width="1.2" height="2.3" />
            <rect class="cls-6" x="264.5" y="257.82" width="1.2" height="2.3" /> */}
            <polyline class="cls-4" points="159.36 288.77 159.61 300.29 339.11 300.29 339.11 327.02" />
            <polyline class="cls-4" points="265.47 359.52 265.47 341.52 182.11 341.52" />
            <polyline class="cls-4" points="256.11 359.52 256.11 258.93 331.11 258.93 331.11 195.02" />
            <Text1 transform="matrix(0 1 -1 0 110 50)" >recruited patients</Text1>
            <Text1 transform="matrix(0 1 -1 0 270 50)" >admin</Text1>
            <Text1 transform="matrix(0 1 -1 0 440 50)" >site coordinator</Text1>
            <Text2 transform="matrix(1 0 0 1 40 180)"><tspan x="0" y="0" class="st0 st3 st4">single page </tspan><tspan x="0" y="16.8" class="st0 st3 st4">trial</tspan><tspan x="0" y="33.6" class="st0 st3 st4">application</tspan></Text2>
            <Text2 transform="matrix(1 0 0 1 227 180)"><tspan x="0" y="0" class="st0 st3 st4">admin </tspan><tspan x="0" y="16.8" class="st0 st3 st4">portal</tspan></Text2>
            <Text2 transform="matrix(1 0 0 1 395 180)"><tspan x="0" y="0" class="st0 st3 st4">site </tspan><tspan x="0" y="16.8" class="st0 st3 st4">portal</tspan></Text2>
        </svg>

    )
}