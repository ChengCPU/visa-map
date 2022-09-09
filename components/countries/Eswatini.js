import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Eswatini = () => {

    const { eswatiniColor } = useContext(ColorContext)

return (
<g className={'eswatini'}>
    <style jsx>{`
    .eswatini {
    fill: ${eswatiniColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1161.7 667.7l0.6 2.9 0.3 2.9-1.4 2.8-3.2 0.7-3.1-3.5 0.1-2.2 1.7-2.4 0.6-1.9 1.7-0.4 2.7 1.1z" />
<circle r="5" cy="500" cx="580" stroke="black"/>
</g>
)
}

export default memo(Eswatini)