import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Maldives = () => {

    const { maldivesColor } = useContext(ColorContext)

return (
<g className={'maldives'}>
    <style jsx>{`
    .maldives {
    fill: ${maldivesColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M1402.9 474.8l0 0.2-0.2-0.1 0.2-0.2 0 0.1z" stroke="black"/>
</g>
)
}

export default memo(Maldives)