import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Laos = () => {

    const { laosColor } = useContext(ColorContext)

return (
<g className={'laos'}>
    <style jsx>{`
    .laos {
    fill: ${laosColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1589.8 410.6l-5.3-2.3-2 4.4-5-2.5 1.5-2.9-0.4-5.4-5.3-5.6-1.3-6.4-5-5.2-4.3-0.4-0.8 2.2-3.2 0.2-1.9-1.1-5.3 3.8-1-5.8 0.4-6.7-3.8-0.3-0.9-3.9-2.7-2 0.8-2.3 4.1-4.2 0.8 1.5 3 0.2-2-7.4 2.7-0.9 4 5.1 3.5 5.8 6.8 0 3 5.6-3.3 1.7-1.2 2.3 7.3 3.9 5.7 7.6 4.4 5.6 4.9 4.5 2 4.5-0.2 6.4z" stroke="black"/>
</g>
)
}

export default memo(Laos)