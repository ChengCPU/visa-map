import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const JanMayen = () => {

    const { janMayenColor } = useContext(ColorContext)

return (
<g className={'janMayen'}>
    <style jsx>{`
    .janMayen {
    fill: ${janMayenColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="500" cx="1450" stroke="black"/>
</g>
)
}

export default JanMayen