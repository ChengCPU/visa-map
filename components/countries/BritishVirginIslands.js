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
<path d="M626.1 383.4l-0.4 0.2-0.1 0-0.3 0.2-0.1-0.1 0.1-0.3 0.6-0.1 0.2 0.1z" />
<circle r="5" cy="500" cx="520" stroke="black"/>
</g>
)
}

export default BritishVirginIslands
