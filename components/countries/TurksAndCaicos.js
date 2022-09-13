import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const TurksAndCaicos = () => {

    const { turksAndCaicosColor } = useContext(ColorContext)

return (
<g className={'turksAndCaicos'}>
    <style jsx>{`
    .turksAndCaicos {
    fill: ${turksAndCaicosColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 587.7 361.6 588.4 361.6 588.7 362 588.4 362 588.1 361.9 587.6 362 587.5 361.7 587.7 361.6 Z" />
<path d="M 585 361.5 585.3 361.9 585.9 361.8 585.7 362 585.1 362 584.7 361.8 585 361.5 Z" />
<path d="M 587.2 360.9 587.2 361.4 586.7 361.2 586.6 360.9 586.7 360.8 587.2 360.9 Z" />
<circle r="5" cy="480" cx="1100" stroke="black"/>
</g>
)
}

export default TurksAndCaicos