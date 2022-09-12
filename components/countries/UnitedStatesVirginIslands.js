import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const UnitedStatesVirginIslands = () => {

    const { unitedStatesVirginIslandsColor } = useContext(ColorContext)

return (
<g className={'unitedStatesVirginIslands'}>
    <style jsx>{`
    .unitedStatesVirginIslands {
    fill: ${unitedStatesVirginIslandsColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 624.5 387.8 624.8 388.1 623.7 388.3 623.6 387.8 624.3 387.6 624.5 387.8 Z" stroke="black"/>
<path d="M 625.2 384 625 384.2 624.5 384.2 624.5 384 624.8 383.9 625.2 384 Z" stroke="black"/>
<path d="M 623.8 383.8 624.2 384.1 624 384.3 623.7 384.1 623.2 384.1 623.4 383.9 623.8 383.8 Z" stroke="black"/>
<circle r="5" cy="400" cx="1250" stroke="black"/>
</g>
)
}

export default memo(UnitedStatesVirginIslands)