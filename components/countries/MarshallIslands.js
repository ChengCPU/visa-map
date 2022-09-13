import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const MarshallIslands = () => {

    const { marshallIslandsColor } = useContext(ColorContext)

return (
<g className={'marshallIslands'}>
    <style jsx>{`
    .marshallIslands {
    fill: ${marshallIslandsColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1953.8 456l1 0.4-0.2 0-0.8-0.4z" />
<circle r="5" cy="230" cx="1550" stroke="black"/>
</g>
)
}

export default MarshallIslands