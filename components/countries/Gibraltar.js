import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Gibraltar = () => {

    const { gibraltarColor } = useContext(ColorContext)

return (
<g className={'gibraltar'}>
    <style jsx>{`
    .gibraltar {
    fill: ${gibraltarColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="430" cx="765" stroke="black"/>
</g>
)
}

export default Gibraltar