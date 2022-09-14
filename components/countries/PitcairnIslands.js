import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const PitcairnIslands = () => {

    const { pitcairnIslandsColor } = useContext(ColorContext)

return (
<g className={'pitcairnIslands'}>
    <style jsx>{`
    .pitcairnIslands {
    fill: ${pitcairnIslandsColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="660" cx="300" stroke="black"/>
</g>
)
}

export default PitcairnIslands