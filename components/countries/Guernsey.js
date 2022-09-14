import { useContext } from 'react'
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
<circle r="4" cy="185" cx="965" stroke="black"/>
</g>
)
}

export default Guernsey