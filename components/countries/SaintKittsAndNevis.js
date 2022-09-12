import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SaintKittsAndNevis = () => {

    const { saintKittsAndNevisColor } = useContext(ColorContext)

return (
<g className={'saintKittsAndNevis'}>
    <style jsx>{`
    .saintKittsAndNevis {
    fill: ${saintKittsAndNevisColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 636.3 392 636 392 635.9 391.8 636.1 391.4 636.3 391.4 636.4 391.6 636.3 392 Z" stroke="black"/>
<path d="M 635.6 390.5 635.5 390.8 635.3 390.8 634.9 390.6 634.7 390.4 635 390 635.5 390.4 635.6 390.5 Z" stroke="black"/>
<circle r="5" cy="550" cx="1000" stroke="black"/>
</g>
)
}

export default memo(SaintKittsAndNevis)