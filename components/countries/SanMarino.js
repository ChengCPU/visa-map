import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SanMarino = () => {

    const { sanMarinoColor } = useContext(ColorContext)

return (
<g className={'sanMarino'}>
    <style jsx>{`
    .sanMarino {
    fill: ${sanMarinoColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="600" cx="1500" stroke="black"/>
</g>
)
}

export default memo(SanMarino)