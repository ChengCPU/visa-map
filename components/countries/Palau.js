import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Palau = () => {

    const { palauColor } = useContext(ColorContext)

return (
<g className={'palau'}>
    <style jsx>{`
    .palau {
    fill: ${palauColor};
    stroke-width: 1;
    }
    `}</style>
<circle r="5" cy="453" cx="1747" stroke="black"/>
</g>
)
}

export default Palau