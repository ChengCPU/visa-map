import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Guernsey = () => {

    const { guernseyColor } = useContext(ColorContext)

return (
<g className={'guernsey'}>
    <style jsx>{`
    .guernsey {
    fill: ${guernseyColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="230" cx="1000" stroke="black"/>
</g>
)
}

export default memo(Guernsey)