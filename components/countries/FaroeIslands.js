import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const FaroeIslands = () => {

    const { faroeIslandsColor } = useContext(ColorContext)

return (
<g className={'faroeIslands'}>
    <style jsx>{`
    .faroeIslands {
    fill: ${faroeIslandsColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="109" cx="954" stroke="black"/>
</g>
)
}

export default FaroeIslands