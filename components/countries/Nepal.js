import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Nepal = () => {

    const { nepalColor } = useContext(ColorContext)

return (
<g className={'nepal'}>
    <style jsx>{`
    .nepal {
    fill: ${nepalColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1469 322.9l0.2 2.7 1.5 4.1-0.1 2.5-4.6 0.1-6.9-1.5-4.3-0.6-3.8-3.2-7.7-0.9-7.8-3.6-5.8-3.1-5.8-2.4 0.9-6 2.8-3 1.9-1.5 4.8 2 6.4 4.2 3.3 0.9 2.5 3.1 4.5 1.2 5 2.9 6.5 1.4 6.5 0.7z" stroke="black"/>
</g>
)
}

export default memo(Nepal)