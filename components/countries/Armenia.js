import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Armenia = () => {

    const { armeniaColor } = useContext(ColorContext)

return (
<g className={'armenia'}>
    <style jsx>{`
    .armenia {
    fill: ${armeniaColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1230.8 253l-1.8 0.2-2.8-3.7-0.2-1-2.3 0-1.9-1.7-1 0.1-2.4-1.8-4.2-1.6-0.1-3.1-1.3-2.2 7-1 1.4 1.6 2.2 1.1-0.7 1.6 3.2 2.2-1.1 2.1 2.6 1.7 2.5 1 0.9 4.5z" stroke="black"/>
</g>
)
}
    
export default memo(Armenia)