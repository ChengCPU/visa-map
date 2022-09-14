import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Cyprus = () => {

    const { cyprusColor } = useContext(ColorContext)

return (
<g className={'cyprus'}>
    <style jsx>{`
    .cyprus {
    fill: ${cyprusColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="4" cy="280" cx="1160" stroke="black"/>
</g>
)
}

export default Cyprus