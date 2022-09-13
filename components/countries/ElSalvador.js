import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const ElSalvador = () => {

    const { elSalvadorColor } = useContext(ColorContext)

return (
<g className={'elSalvador'}>
    <style jsx>{`
    .elSalvador {
    fill: ${elSalvadorColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M492.5 415.9l-0.7 1.5-3.3-0.1-2-0.6-2.2-1.3-3-0.4-1.5-1.4 0.3-0.9 2-1.6 1.2-0.7-0.3-0.8 1.4-0.4 1.6 0.6 1.1 1.2 1.6 1.1 0.1 0.8 2.5-0.7 1.2 0.4 0.7 0.7-0.7 2.6z" />
<circle r="5" cy="500" cx="570" stroke="black"/>
</g>
)
}

export default ElSalvador
