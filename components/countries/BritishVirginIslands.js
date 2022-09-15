import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const BritishVirginIslands = () => {

    const { britishVirginIslandsColor } = useContext(ColorContext)

return (
<g className={'britishVirginIslands'}>
    <style jsx>{`
    .britishVirginIslands {
    fill: ${britishVirginIslandsColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="2.5" cy="382" cx="625" stroke="black"/>
</g>
)
}

export default BritishVirginIslands
