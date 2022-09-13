import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Andorra = () => {

    const { andorraColor } = useContext(ColorContext)

return (
<g className={'andorra'}>
    <style jsx>{`
    .andorra {
    fill: ${andorraColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="230" cx="993" stroke="black"/>
</g>
)
}

export default Andorra