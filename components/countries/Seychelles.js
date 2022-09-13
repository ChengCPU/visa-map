import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Seychelles = () => {

    const { seychellesColor } = useContext(ColorContext)

return (
<g className={'seychelles'}>
    <style jsx>{`
    .seychelles {
    fill: ${seychellesColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 1249 562.1 1248.7 562.3 1248.2 562.3 1247.8 562.5 1247.4 562.5 1247.4 562.3 1247.9 562.3 1248.3 562.2 1248.7 561.9 1248.9 561.9 1249 562.1 Z" />
<path d="M 1248.5 561.8 1248.3 561.9 1247.9 561.9 1247.9 561.7 1248.5 561.8 Z" />
<path d="M 1300.4 531.5 1300.8 531.9 1300.6 532.2 1300.4 531.9 1300.1 531.7 1300.3 531.2 1300.4 531.5 Z" />
<circle r="5" cy="400" cx="1150" stroke="black"/>
</g>
)
}

export default Seychelles