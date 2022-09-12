import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Lesotho = () => {

    const { lesothoColor } = useContext(ColorContext)

return (
<g className={'lesotho'}>
    <style jsx>{`
    .lesotho {
    fill: ${lesothoColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1139.1 697.9l-2 0.7-3.7-5 3.2-4 3.1-2.5 2.7-1.4 2.2 2 1.7 2-1.9 3.1-1.1 2.1-3.1 1-1.1 2z" stroke="black"/>
<circle r="5" cy="230" cx="993" stroke="black"/>
</g>
)
}

export default memo(Lesotho)