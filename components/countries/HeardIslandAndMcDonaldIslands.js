import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const HeardIslandAndMcDonaldIslands = () => {

    const { heardIslandAndMcDonaldIslandsColor } = useContext(ColorContext)

return (
<g className={'heardIslandAndMcDonaldIslands'}>
    <style jsx>{`
    .heardIslandAndMcDonaldIslands {
    fill: ${heardIslandAndMcDonaldIslandsColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="230" cx="1050" stroke="black"/>
</g>
)
}

export default memo(HeardIslandAndMcDonaldIslands)