import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const NorthernCyprus = () => {

    const { northernCyprusColor } = useContext(ColorContext)

return (
<g className={'northernCyprus'}>
    <style jsx>{`
    .northernCyprus {
    fill: ${northernCyprusColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="445" cx="1275" stroke="black"/>
</g>
)
}

export default NorthernCyprus