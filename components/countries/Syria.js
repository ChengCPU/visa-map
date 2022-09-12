import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Syria = () => {

    const { syriaColor } = useContext(ColorContext)

return (
<g className={'syria'}>
    <style jsx>{`
    .syria {
    fill: ${syriaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1195 287.5l-9.7 6.9-6.3-2.6-0.1 0 0.6-1-0.4-2.6 0.9-3.5 2.7-2.5-1.2-2.5-2.5-0.3-1.1-4.9 1-2.7 1.3-1.4 1.2-1.4-0.2-3.5 1.9 1.2 5.6-1.8 3 1.2 4.4 0 5.7-2.4 2.9 0.1 5.9-1-2.1 4-2.7 1.6 1.2 4.7-1 7.7-11 6.7z" stroke="black"/>
</g>
)
}

export default memo(Syria)