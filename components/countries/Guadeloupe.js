import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Guadeloupe = () => {

    const { guadeloupeColor } = useContext(ColorContext)

return (
<g className={'guadeloupe'}>
    <style jsx>{`
    .guadeloupe {
    fill: ${guadeloupeColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="3" cy="397" cx="637.5" stroke="black"/>
</g>
)
}

export default Guadeloupe