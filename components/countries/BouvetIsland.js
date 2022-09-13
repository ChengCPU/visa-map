import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const BouvetIsland = () => {

    const { bouvetIslandColor } = useContext(ColorContext)

return (
<g className={'bouvetIsland'}>
    <style jsx>{`
    .bouvetIsland {
    fill: ${bouvetIslandColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="380" cx="1300" stroke="black"/>
</g>
)
}

export default BouvetIsland