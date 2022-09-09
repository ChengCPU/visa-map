import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const DominicanRepublic = () => {

    const { dominicanRepublicColor } = useContext(ColorContext)

return (
<g className={'dominicanRepublic'}>
    <style jsx>{`
    .dominicanRepublic {
    fill: ${dominicanRepublicColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M585.7 386l0.3-1.8-1.3-1.9 1.5-1.1 0.7-2.5-0.1-3.4 0.8-1.1 4.3 0 3.2 1.6 1.5-0.1 0.7 2.3 3.1-0.2-0.4 1.9 2.5 0.3 2.5 2.3-2.3 2.6-2.6-1.4-2.6 0.3-1.8-0.3-1.1 1.2-2.2 0.4-0.7-1.6-1.9 0.9-2.7 4.4-1.3-1-0.1-1.8z" stroke="black"/>
</g>
)
}

export default memo(DominicanRepublic)