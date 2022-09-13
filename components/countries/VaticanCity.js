import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const VaticanCity = () => {

    const { vaticanCityColor } = useContext(ColorContext)

return (
<g className={'vaticanCity'}>
    <style jsx>{`
    .vaticanCity {
    fill: ${vaticanCityColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="320" cx="1100" stroke="black"/>
</g>
)
}

export default VaticanCity