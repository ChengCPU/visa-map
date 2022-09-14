import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Kiribati = () => {

    const { kiribatiColor } = useContext(ColorContext)

return (
<g className={'kiribati'}>
    <style jsx>{`
    .kiribati {
    fill: ${kiribatiColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="490" cx="1960" stroke="black"/>
</g>
)
}

export default Kiribati