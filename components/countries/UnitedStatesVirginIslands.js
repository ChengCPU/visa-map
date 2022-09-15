import { useContext } from 'react'
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
<circle r="2.5" cy="387" cx="622" stroke="black"/>
</g>
)
}

export default UnitedStatesVirginIslands