import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Guam = () => {

    const { guamColor } = useContext(ColorContext)

return (
<g className={'guam'}>
    <style jsx>{`
    .guam {
    fill: ${guamColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1800.8 415.5l-0.1 0.4 0 0.6-0.1 0.3-0.3 0-0.2-0.3-0.1-0.5 0-0.5 0.6-0.5 0.1-0.2 0.1-0.5 0.2-0.1 0.1 0.2 0.4 0.1-0.2 0.5-0.5 0.5z" stroke="black"/>
<circle r="5" cy="230" cx="1300" stroke="black"/>
</g>
)
}

export default memo(Guam)