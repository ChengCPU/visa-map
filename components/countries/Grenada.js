import { memo, useContext } from 'react'
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
<path d="M639.2 424.5l-0.4 0.3-0.2-0.1-0.1-0.5 0.2-0.5 0.3-0.4 0.3 0 0.1 0.3-0.1 0.7-0.1 0.2z" stroke="black"/>
</g>
)
}

export default memo(Grenada)