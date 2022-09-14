import { useContext } from 'react'
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
<circle r="4" cy="396" cx="631" stroke="black"/>
</g>
)
}

export default SaintKittsAndNevis