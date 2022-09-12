import { memo, useContext } from 'react'
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
<path d="M1747.7 453.1l-0.2 0.4 0.1 0.1-0.2 0.6 0.1 0.2-0.5 0.2-0.2-0.7 0.3-0.2-0.2-0.2 0.3-0.6 0.3-0.1 0.2 0.3z" stroke="black"/>
<circle r="5" cy="300" cx="1100" stroke="black"/>
</g>
)
}

export default memo(Palau)