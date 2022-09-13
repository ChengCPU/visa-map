import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const CookIslands = () => {

    const { cookIslandsColor } = useContext(ColorContext)

return (
<g className={'cookIslands'}>
    <style jsx>{`
    .cookIslands {
    fill: ${cookIslandsColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="500" cx="550" stroke="black"/>
</g>
)
}

export default CookIslands