import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Reunion = () => {

    const { reunionColor } = useContext(ColorContext)

return (
<g className={'reunion'}>
    <style jsx>{`
    .reunion {
    fill: ${reunionColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1295 635.8l0.4 0 0.4 0.2 0.3 0.3 0 0.3 0.1 0.5 0.3 0.2 0.2 0.2 0.1 0.2-0.2 0.6-0.1 0.4-0.2 0.2-0.4 0.1-0.9 0-0.2-0.2-0.8-0.4-0.3-0.5 0-0.3-0.3-0.6 0.1-0.4 0.2-0.2 0.2-0.4 0.1 0 0.5-0.2 0.5 0z" stroke="black"/>
</g>
)
}

export default memo(Reunion)