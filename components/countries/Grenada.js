import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Grenada = () => {

    const { grenadaColor } = useContext(ColorContext)

return (
<g className={'grenada'}>
    <style jsx>{`
    .grenada {
    fill: ${grenadaColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="3.5" cy="426" cx="639" stroke="black"/>
</g>
)
}

export default Grenada