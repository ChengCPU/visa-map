import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const TrinidadAndTobago = () => {

    const { trinidadAndTobagoColor } = useContext(ColorContext)

return (
<g className={'trinidadAndTobago'}>
    <style jsx>{`
    .trinidadAndTobago {
    fill: ${trinidadAndTobagoColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="3.5" cy="434" cx="640" stroke="black"/>
</g>
)
}

export default TrinidadAndTobago