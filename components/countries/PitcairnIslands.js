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
<circle r="5" cy="300" cx="1300" stroke="black"/>
</g>
)
}

export default PitcairnIslands